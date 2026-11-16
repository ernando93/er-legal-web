import { getCollection } from 'astro:content';
import { nav } from './site';
import { tim } from './tim';

// Menu Agenda, Publikasi, dan Tim baru muncul setelah ada isinya.
// Begitu admin menambah acara atau artikel pertama, menu ikut muncul saat website dibangun ulang.
export async function menu() {
  const ada: Record<string, boolean> = {
    '/agenda': (await getCollection('acara')).length > 0,
    '/artikel': (await getCollection('artikel')).length > 0,
    '/tim': tim.length > 0,
  };
  return nav.filter((n) => ada[n.href] ?? true);
}
