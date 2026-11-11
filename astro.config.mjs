import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Di GitHub Pages website berada di bawah /er-legal-web.
// Variabel ini hanya diisi saat deploy, jadi localhost tetap di alamat utama.
const base = process.env.BASE_PATH;

// Menambahkan awalan alamat ke link internal yang ditulis manual.
const prefixLinks = {
  name: 'prefix-links',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const pattern = new RegExp(`(href|src)="/(?!/)(?!${base.slice(1)}/)`, 'g');
      const walk = (folder) => {
        for (const name of readdirSync(folder)) {
          const file = join(folder, name);
          if (statSync(file).isDirectory()) walk(file);
          else if (name.endsWith('.html')) {
            writeFileSync(file, readFileSync(file, 'utf8').replace(pattern, `$1="${base}/`));
          }
        }
      };
      walk(fileURLToPath(dir));
    },
  },
};

export default defineConfig({
  base: base || undefined,
  integrations: base ? [prefixLinks] : [],
  devToolbar: { enabled: false },
});
