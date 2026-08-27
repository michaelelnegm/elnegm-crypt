// ============================================================
// ملف: js/matrix-rain.js
// ============================================================
(function matrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, columns, drops;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    columns = Math.floor(w / 20);
    drops = Array(columns).fill(1);
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

  function draw() {
    ctx.fillStyle = 'rgba(13,13,13,0.04)';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#00FF41';
    ctx.font = '18px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 20, drops[i] * 20);
      if (drops[i] * 20 > h && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();