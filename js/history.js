// ============================================================
// ملف: js/history.js
// ============================================================
let history = JSON.parse(localStorage.getItem('elnegm_history')) || [];

function renderHistory() {
  const container = document.getElementById('history-list');
  if (!container) return;
  if (history.length === 0) {
    container.innerHTML = `<div class="history-item"><span>لا توجد عمليات مسجلة</span></div>`;
    return;
  }
  container.innerHTML = history.slice().reverse().map((item) => `
    <div class="history-item">
      <span><i class="fas fa-${item.type === 'encrypt' ? 'lock' : 'unlock'}"></i> ${item.type === 'encrypt' ? 'تشفير' : 'فك'}</span>
      <span style="color:#0AFFED;font-family:monospace;font-size:0.8rem;">${item.method}</span>
      <small>${new Date(item.time).toLocaleString()}</small>
    </div>
  `).join('');
}

function addHistory(type, method) {
  history.push({ type, method, time: Date.now() });
  if (history.length > 50) history.shift();
  localStorage.setItem('elnegm_history', JSON.stringify(history));
  renderHistory();
}

function clearHistory() {
  history = [];
  localStorage.removeItem('elnegm_history');
  renderHistory();
}

// ربط زر المسح إذا كان موجوداً
document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.getElementById('clear-history-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearHistory);
  }
  renderHistory();
});