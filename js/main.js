// ============================================================
// ملف: js/main.js
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // عناصر التشفير
  const plaintext = document.getElementById('plaintext');
  const methodEncrypt = document.getElementById('method-encrypt');
  const encryptedOutput = document.getElementById('encrypted-output');
  const encryptBtn = document.getElementById('encrypt-btn');

  // عناصر فك التشفير
  const ciphertext = document.getElementById('ciphertext');
  const methodDecrypt = document.getElementById('method-decrypt');
  const decryptedOutput = document.getElementById('decrypted-output');
  const decryptBtn = document.getElementById('decrypt-btn');

  // نسخ
  const copyEncrypted = document.getElementById('copy-encrypted');
  const copyDecrypted = document.getElementById('copy-decrypted');

  // تشفير
  if (encryptBtn) {
    encryptBtn.addEventListener('click', () => {
      const text = plaintext.value.trim();
      if (!text) { encryptedOutput.textContent = '⚠️ أدخل نصاً للتشفير'; return; }
      const method = methodEncrypt.value;
      try {
        const result = algos[method].encrypt(text);
        encryptedOutput.textContent = result;
        addHistory('encrypt', method);
      } catch (e) {
        encryptedOutput.textContent = '❌ خطأ في التشفير';
      }
    });
  }

  // فك
  if (decryptBtn) {
    decryptBtn.addEventListener('click', () => {
      const text = ciphertext.value.trim();
      if (!text) { decryptedOutput.textContent = '⚠️ أدخل نصاً مشفراً'; return; }
      const method = methodDecrypt.value;
      try {
        const result = decAlgos[method].decrypt(text);
        decryptedOutput.textContent = result;
        addHistory('decrypt', method);
      } catch (e) {
        decryptedOutput.textContent = '❌ خطأ في فك التشفير (تأكد من النص والطريقة)';
      }
    });
  }

  // نسخ
  if (copyEncrypted) {
    copyEncrypted.addEventListener('click', () => {
      copyToClipboard(encryptedOutput.textContent, '✅ تم نسخ النص المشفر');
    });
  }
  if (copyDecrypted) {
    copyDecrypted.addEventListener('click', () => {
      copyToClipboard(decryptedOutput.textContent, '✅ تم نسخ النص الأصلي');
    });
  }
});