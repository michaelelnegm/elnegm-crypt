// ============================================================
// ملف: js/ui-effects.js
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // تأثير الكتابة التجريبي
  const output = document.getElementById('encrypted-output');
  if (output && output.textContent === '...') {
    const demo = "🔐 ElnegmCrypt جاهز للتشفير";
    let i = 0;
    output.textContent = '';
    function type() {
      if (i < demo.length) {
        output.textContent += demo.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    }
    setTimeout(type, 300);
  }
});