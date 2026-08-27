// ============================================================
// ملف: js/decryption.js
// ============================================================
const decAlgos = {
  base64: {
    decrypt: (text) => decodeURIComponent(escape(atob(text)))
  },
  caesar: {
    decrypt: (text) => {
      let shift = 3;
      return text.split('').map(c => {
        if (c >= 'a' && c <= 'z') return String.fromCharCode((c.charCodeAt(0) - 97 - shift + 26) % 26 + 97);
        if (c >= 'A' && c <= 'Z') return String.fromCharCode((c.charCodeAt(0) - 65 - shift + 26) % 26 + 65);
        return c;
      }).join('');
    }
  },
  reverse: {
    decrypt: (text) => text.split('').reverse().join('')
  },
  binary: {
    decrypt: (text) => {
      return text.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
    }
  }
};