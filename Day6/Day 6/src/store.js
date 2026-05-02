let todos = [];
let nextId = 1;
export function all()       { return [...todos]; }
export function add(text)   {
  todos.push({ id: nextId++, text, done: false });
}
export function toggle(id)  {
  const t = todos.find(t => t.id === id);
  if (t) t.done = !t.done;
}
export function remove(id)  {
  todos = todos.filter(t => t.id !== id);
}