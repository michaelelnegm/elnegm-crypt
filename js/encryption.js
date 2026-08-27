// ============================================================
// ملف: js/encryption.js
// ============================================================
const algos = {
  base64: {
    encrypt: (text) => btoa(unescape(encodeURIComponent(text)))
  },
  caesar: {
    encrypt: (text) => {
      let shift = 3;
      return text.split('').map(c => {
        if (c >= 'a' && c <= 'z') return String.fromCharCode((c.charCodeAt(0) - 97 + shift) % 26 + 97);
        if (c >= 'A' && c <= 'Z') return String.fromCharCode((c.charCodeAt(0) - 65 + shift) % 26 + 65);
        return c;
      }).join('');
    }
  },
  reverse: {
    encrypt: (text) => text.split('').reverse().join('')
  },
  binary: {
    encrypt: (text) => {
      return text.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    }
  }
};