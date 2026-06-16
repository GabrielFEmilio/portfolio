/* =====================================================================
   background.js: WebGL ambient starfield + 3D language constellation
   Built on Three.js (r128). Performance-first: capped DPR, paused on
   hidden tab, disabled under prefers-reduced-motion.
   ===================================================================== */
(function () {
  "use strict";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  /* soft round sprite shared by point systems */
  function softDisc(color) {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, color);
    grd.addColorStop(0.4, color);
    grd.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grd;
    g.beginPath(); g.arc(32, 32, 32, 0, Math.PI * 2); g.fill();
    const t = new THREE.Texture(c); t.needsUpdate = true; return t;
  }

  /* ----------------------------------------------------------------
     1) AMBIENT STARFIELD  (#bg-canvas)
     ---------------------------------------------------------------- */
  function initStarfield() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || !window.THREE) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(DPR);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 100);
    camera.position.z = 26;

    const COUNT = window.innerWidth < 720 ? 420 : 900;
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const spread = 60;
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      speeds[i] = 0.2 + Math.random() * 0.6;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.42, map: softDisc("rgba(150,190,255,1)"),
      transparent: true, opacity: 0.85, depthWrite: false,
      blending: THREE.AdditiveBlending, sizeAttenuation: true
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    /* a second, sparse warmer layer for depth */
    const COUNT2 = Math.floor(COUNT / 4);
    const pos2 = new Float32Array(COUNT2 * 3);
    for (let i = 0; i < COUNT2; i++) {
      pos2[i * 3]     = (Math.random() - 0.5) * spread;
      pos2[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos2[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    const geo2 = new THREE.BufferGeometry();
    geo2.setAttribute("position", new THREE.BufferAttribute(pos2, 3));
    const mat2 = new THREE.PointsMaterial({
      size: 0.7, map: softDisc("rgba(180,150,255,1)"),
      transparent: true, opacity: 0.5, depthWrite: false,
      blending: THREE.AdditiveBlending, sizeAttenuation: true
    });
    scene.add(new THREE.Points(geo2, mat2));

    let mx = 0, my = 0, tmx = 0, tmy = 0;
    window.addEventListener("pointermove", (e) => {
      tmx = (e.clientX / window.innerWidth - 0.5);
      tmy = (e.clientY / window.innerHeight - 0.5);
    }, { passive: true });

    function resize() {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize); resize();

    let scrollY = 0;
    window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

    let raf, running = true;
    const clock = new THREE.Clock();
    function loop() {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      const arr = geo.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        arr[i * 3 + 1] += speeds[i] * 0.01;            // slow upward drift
        if (arr[i * 3 + 1] > spread / 2) arr[i * 3 + 1] = -spread / 2;
        arr[i * 3] += Math.sin(t * 0.1 + i) * 0.0015;  // gentle lateral sway
      }
      geo.attributes.position.needsUpdate = true;

      mx += (tmx - mx) * 0.04; my += (tmy - my) * 0.04;
      camera.position.x = mx * 6;
      camera.position.y = -my * 6 - scrollY * 0.0016;
      camera.lookAt(0, scrollY * 0.0008, 0);
      points.rotation.z = t * 0.01;
      renderer.render(scene, camera);
    }
    if (!REDUCED) loop(); else renderer.render(scene, camera);

    document.addEventListener("visibilitychange", () => {
      running = !document.hidden && !REDUCED;
      if (running) loop(); else cancelAnimationFrame(raf);
    });
  }

  /* ----------------------------------------------------------------
     2) CODE SPHERE  (#sphereCanvas): language constellation
     langs = [{name, pct, color}]  sorted desc
     ---------------------------------------------------------------- */
  let sphereState = null;
  function initCodeSphere(langs) {
    const canvas = document.getElementById("sphereCanvas");
    if (!canvas || !window.THREE) return;
    if (sphereState) { sphereState.dispose(); sphereState = null; }

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(DPR);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 9;

    const group = new THREE.Group();
    scene.add(group);

    const data = (langs && langs.length ? langs : [
      { name: "JavaScript", pct: 32, color: "#f1e05a" },
      { name: "C",          pct: 24, color: "#555555" },
      { name: "Java",       pct: 20, color: "#b07219" },
      { name: "C#",         pct: 14, color: "#178600" },
      { name: "HTML",       pct: 6,  color: "#e34c26" },
      { name: "Shell",      pct: 4,  color: "#89e051" }
    ]).slice(0, 8);

    const R = 3.4;
    const nodes = [];
    const n = data.length;
    // distribute on a sphere (fibonacci)
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / Math.max(n - 1, 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * 2.399963;
      const pos = new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r).multiplyScalar(R);
      const col = new THREE.Color(data[i].color);
      const size = 0.18 + (data[i].pct / 100) * 0.55;

      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(size, 20, 20),
        new THREE.MeshBasicMaterial({ color: col })
      );
      mesh.position.copy(pos);
      group.add(mesh);

      // glow halo
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(size * 1.9, 16, 16),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.16,
          blending: THREE.AdditiveBlending, depthWrite: false })
      );
      halo.position.copy(pos);
      group.add(halo);

      nodes.push({ pos, col });
    }

    // connection lines: each node to center + to nearest neighbours
    const linePts = [];
    const lineCols = [];
    function pushLine(a, b, ca, cb) {
      linePts.push(a.x, a.y, a.z, b.x, b.y, b.z);
      lineCols.push(ca.r, ca.g, ca.b, cb.r, cb.g, cb.b);
    }
    const center = new THREE.Vector3(0, 0, 0);
    const dim = new THREE.Color("#2fd4ee");
    nodes.forEach((nd, i) => {
      pushLine(center, nd.pos, dim, nd.col);
      // nearest neighbour
      let best = -1, bd = 1e9;
      nodes.forEach((o, j) => {
        if (j === i) return;
        const d = nd.pos.distanceTo(o.pos);
        if (d < bd) { bd = d; best = j; }
      });
      if (best > i) pushLine(nd.pos, nodes[best].pos, nd.col, nodes[best].col);
    });
    const lgeo = new THREE.BufferGeometry();
    lgeo.setAttribute("position", new THREE.Float32BufferAttribute(linePts, 3));
    lgeo.setAttribute("color", new THREE.Float32BufferAttribute(lineCols, 3));
    const lines = new THREE.LineSegments(lgeo, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending
    }));
    group.add(lines);

    // central core
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 24, 24),
      new THREE.MeshBasicMaterial({ color: "#dfe8ff" })
    );
    group.add(core);
    const coreHalo = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 20, 20),
      new THREE.MeshBasicMaterial({ color: "#4a7dff", transparent: true, opacity: 0.22,
        blending: THREE.AdditiveBlending, depthWrite: false })
    );
    group.add(coreHalo);

    let tmx = 0, tmy = 0, mx = 0, my = 0;
    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      tmx = ((e.clientX - rect.left) / rect.width - 0.5);
      tmy = ((e.clientY - rect.top) / rect.height - 0.5);
    }
    canvas.addEventListener("pointermove", onMove, { passive: true });

    function resize() {
      const r = canvas.getBoundingClientRect();
      const w = Math.max(r.width, 1), h = Math.max(r.height, 1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(resize); ro.observe(canvas); resize();

    let raf, running = true;
    const clock = new THREE.Clock();
    function loop() {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.18 + mx * 0.8;
      group.rotation.x = Math.sin(t * 0.15) * 0.12 + my * 0.5;
      mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
      const s = 1 + Math.sin(t * 1.4) * 0.06;
      coreHalo.scale.setScalar(s);
      renderer.render(scene, camera);
    }
    if (!REDUCED) loop(); else renderer.render(scene, camera);

    function onVis() {
      running = !document.hidden && !REDUCED;
      if (running) loop(); else cancelAnimationFrame(raf);
    }
    document.addEventListener("visibilitychange", onVis);

    sphereState = {
      dispose() {
        cancelAnimationFrame(raf); running = false;
        ro.disconnect();
        canvas.removeEventListener("pointermove", onMove);
        document.removeEventListener("visibilitychange", onVis);
        renderer.dispose();
      }
    };
  }

  window.PortfolioBG = { initStarfield, initCodeSphere };
})();
