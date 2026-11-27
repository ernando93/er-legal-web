import { defineMiddleware } from 'astro:middleware';
import { judulHtml } from './lib/judul';

// Semua judul <h1>–<h6> diberi huruf kapital gaya PUEBI (permintaan klien),
// termasuk judul acara dan artikel dari CMS. Berlaku di dev dan saat build.
export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!res.headers.get('content-type')?.includes('text/html')) return res;
  const headers = new Headers(res.headers);
  headers.delete('content-length');
  return new Response(judulHtml(await res.text()), { status: res.status, statusText: res.statusText, headers });
});
