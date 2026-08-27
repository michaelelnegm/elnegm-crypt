// ============================================================
// ملف: js/clipboard.js
// ============================================================
function copyToClipboard(text, successMsg = '✅ تم النسخ') {
  if (!text || text === '...' || text.includes('⚠️')) return;
  navigator.clipboard.writeText(text).then(() => alert(successMsg));
}