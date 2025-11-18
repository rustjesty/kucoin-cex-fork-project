import * as clipboard from 'clipboard-polyfill';
import crypto from 'crypto'
import fs from 'fs'
export const handleCopyToClipboard = (address: any) => {
  clipboard.writeText(address);
  // triggerToast('clipboardCopied', 'success', 1200);
};

// export const encryptStringWithRsaPublicKey = (toEncrypt: any) => {
//   var md = forge.md.md5.create();
//   md.update(toEncrypt);
//   return md.digest().toHex();
//   // const publicKey = `
//   // -----BEGIN PUBLIC KEY-----
//   // MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgBd+cTblFj92AaZJpTUAnlg
//   // ZRN/Ng6WyqnNL1PgrihZHTo5yCrLWdp/P7wvKZZbUeI3U+rfrEqLhJ3FCjt1ofgA
//   // xc4l4RTTV8eenFsG6+aN5FmfhgSt08yRCwVj2SwGIFX+CL1la/JOyw9bzPx70xLK
//   // FrjskVLI96rSfAcStNhVGy1PaJrt5vHnYs+7Fc2QHgctyH5E3jzqRpNyfwEG3cBC
//   // dTEmBMSoqIkcXAvQpKL8GsttECZBKPjA9rqYu87Ph5ivmjQWLNmdht7/AyQVDlLd
//   // Z7JWKVzIZXuYgcT839ktN27cyOXyfAI/qT72mdgMLu2KEbnkKoguzKkQ0iaYE811
//   // lrm/n6jVp7QvAQ2Gnf1qOO6fq0RA9GmwjKR+cDKdkfRbKjCOLpEpPiJtg5jLD6jP
//   // gQwQlnbNON58ocSp8pvyR1nlD68RrfdzgjNi9QtPjVvOGQxmGuVya/MAb2v3CabQ
//   // 5EB39PN9BjdkdZDOnBgawR+aTNCf1ytrhDp9pVineoP5x9zzh8cq1xz5V4uoSidr
//   // 220cpglZ+d7tyZc5yF6syEl6h+2lB6PljGx1gZOct+zWbbZSePwnVOTaiZpbAHps
//   // 5srrY6LdHlQOLPBvGSutg9yAivynUtBtz0a4c2+pxWCGrOVdYy9QLFh8diKnpI2k
//   // Ohfz/J7CoyZna3kxn/n9nwIDAQAB
//   // -----END PUBLIC KEY-----
//   // `;

//   // const publicKeyObj = forge.pki.publicKeyFromPem(publicKey);

//   // const encrypted = publicKeyObj.encrypt(toEncrypt, 'RSA-OAEP', {
//   //   md: forge.md.sha256.create(),
//   //   mgf1: {
//   //     md: forge.md.sha256.create()
//   //   }
//   // });
//   // console.log("forge.util.encode64(encrypted)", forge.util.encode64(encrypted))
//   // return forge.util.encode64(encrypted);
// };


export const encryptStringWithRsaPublicKey = (toEncrypt: any) => {
  const publicKey = fs.readFileSync('./public.pem', 'utf-8');
  const buffer = Buffer.from(toEncrypt, 'utf16le');
  
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
};