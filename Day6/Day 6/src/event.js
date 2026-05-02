import * as store   from './store.js';
import { render }   from './render.js';
export function wire(form, input, list) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
      if (!text) return;
    store.add(text);
    input.value = '';
    render(list);
  });
  list.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = Number(li.dataset.id);
    if (e.target.classList.contains('del')) {
      store.remove(id);
    } else {
      store.toggle(id);
    }
    render(list);
  });
}