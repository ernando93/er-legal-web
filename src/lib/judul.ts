// Huruf kapital judul sesuai PUEBI: setiap kata diawali huruf kapital,
// kecuali kata depan, kata hubung, dan "yang" yang tidak berada di awal judul
// atau di awal kalimat (setelah . ? ! :).
// Huruf kapital yang sudah ada (LawOn.id, PKWT, S.H.) tidak diubah.

const KATA_KECIL = new Set([
  // kata depan
  'di', 'ke', 'dari', 'pada', 'kepada', 'daripada', 'dalam', 'untuk', 'bagi', 'oleh',
  'tentang', 'terhadap', 'dengan', 'sebagai', 'antara', 'atas', 'demi', 'per', 'tanpa',
  // kata hubung
  'dan', 'atau', 'serta', 'tetapi', 'namun', 'melainkan', 'sedangkan', 'padahal',
  'karena', 'sehingga', 'agar', 'supaya', 'jika', 'kalau', 'bila', 'apabila', 'maupun', 'bahwa',
  // lainnya
  'yang',
]);

const KATA = /[\p{L}\p{N}]+(?:[.'’-][\p{L}\p{N}]+)*/gu;
const HURUF_ANGKA = /[\p{L}\p{N}]/u;
const AKHIR_KALIMAT = /[.?!:]/;

const kapital = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type Status = { awalKalimat: boolean; sebelumnya: string };

// Mengolah satu potongan teks. Status dibawa antarpotongan supaya teks yang
// terpotong tag HTML (misalnya <em>) tetap dibaca sebagai satu judul.
function olah(teks: string, st: Status): string {
  let hasil = '';
  let posisi = 0;
  for (const m of teks.matchAll(KATA)) {
    const jeda = teks.slice(posisi, m.index);
    if (AKHIR_KALIMAT.test(jeda)) st.awalKalimat = true;
    const kiri = jeda ? jeda.slice(-1) : st.sebelumnya;
    let kata = m[0];
    // Lanjutan kata yang terpotong tag, misalnya Hu<em>kum</em>: jangan diubah.
    if (!HURUF_ANGKA.test(kiri)) {
      if (!st.awalKalimat && KATA_KECIL.has(kata.toLowerCase())) {
        kata = kata.charAt(0).toLowerCase() + kata.slice(1);
      } else {
        kata = kata.split('-').map(kapital).join('-');
      }
    }
    hasil += jeda + kata;
    posisi = m.index + m[0].length;
    st.awalKalimat = false;
    st.sebelumnya = m[0].slice(-1);
  }
  const sisa = teks.slice(posisi);
  if (AKHIR_KALIMAT.test(sisa)) st.awalKalimat = true;
  if (teks) st.sebelumnya = teks.slice(-1);
  return hasil + sisa;
}

/** Judul teks biasa, misalnya untuk <title>. */
export function judul(teks: string): string {
  return olah(teks, { awalKalimat: true, sebelumnya: ' ' });
}

/** Mengubah semua judul <h1>–<h6> di dalam HTML. Tag dan entitas dibiarkan. */
export function judulHtml(html: string): string {
  return html.replace(/<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag, attr, isi) => {
    const st: Status = { awalKalimat: true, sebelumnya: ' ' };
    const baru = isi
      .split(/(<[^>]*>|&[#a-zA-Z0-9]+;)/)
      .map((bagian: string) => {
        if (bagian.startsWith('<')) {
          if (/^<br\b/i.test(bagian)) st.sebelumnya = ' ';
          return bagian;
        }
        if (/^&[#a-zA-Z0-9]+;$/.test(bagian)) {
          st.sebelumnya = ' ';
          return bagian;
        }
        return olah(bagian, st);
      })
      .join('');
    return `<${tag}${attr}>${baru}</${tag}>`;
  });
}
