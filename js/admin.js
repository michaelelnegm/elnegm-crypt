// ============================================================
// ملف: js/admin.js
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  function updateStats() {
    const history = JSON.parse(localStorage.getItem('elnegm_history')) || [];
    const total = history.length;
    const encrypts = history.filter(h => h.type === 'encrypt').length;
    const decrypts = history.filter(h => h.type === 'decrypt').length;

    document.getElementById('total-ops').textContent = total;
    document.getElementById('encrypt-count').textContent = encrypts;
    document.getElementById('decrypt-count').textContent = decrypts;
  }

  const refreshBtn = document.getElementById('refresh-stats');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', updateStats);
  }

  const clearAllBtn = document.getElementById('clear-all-history');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (confirm('هل تريد مسح كل السجل؟')) {
        localStorage.removeItem('elnegm_history');
        updateStats();
        // تحديث عرض السجل في history.html إذا كان مفتوحاً
        const historyList = document.getElementById('history-list');
        if (historyList) {
          historyList.innerHTML = `<div class="history-item"><span>لا توجد عمليات مسجلة</span></div>`;
        }
      }
    });
  }

  updateStats();
});