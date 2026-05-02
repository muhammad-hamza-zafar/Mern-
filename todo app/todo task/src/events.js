import {render}  from './render.js'
export function wire(form,heading,decription,todoTtask){
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const head = heading.value
    const dec  = decription.value

 render(head,dec,todoTtask)
});

}

