import './style.css';
import { wire }   from './event.js';
import { render } from './render.js';
const form  = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list  = document.getElementById('todo-list');
wire(form, input, list);
render(list);

