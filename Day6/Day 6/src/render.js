import { all } from './store.js';
export function render(list) {
  list.innerHTML = all().map(t => `
    <li data-id="${t.id}" class="${t.done ? 'done' : ''}">
      <span class="text">${t.text}</span>
      <button class="del">x</button>
    </li>
  `).join('');
}