import './events.js'

let todo = []
let nextid = 0

export function render(head, dec, todoTtask) {
    // 1. Data create karein
    const newTodo = { id: nextid++, heading: head, description: dec };
    todo.push(newTodo);
console.log(todo)
    // 2. Elements create karein (Abhi sirf memory mein hain)
    let card = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let del = document.createElement("button"); // 'del' button yahan create ho gaya

    // 3. Content aur Attributes set karein
    card.setAttribute("id", `card-${newTodo.id}`);
    h3.textContent = newTodo.heading;
    p.textContent = newTodo.description;
    del.textContent = "delete";

    card.classList.add("card");
    del.classList.add("Btn-del");

    // 4. EVENT LISTENER (Button append karne se pehle bhi laga sakte hain)
    // Ye tab tak kaam nahi karega jab tak render function ke andar hai
    del.addEventListener("click", () => {
        card.remove(); 
        todo = todo.filter(t => t.id !== newTodo.id);
        console.log("Deleted! New List:", todo);
    });

    // 5. Hierarchy banayein (Append items)
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(del);
    
    // 6. Final step: Screen par dikhayein
    todoTtask.appendChild(card);
} 
// <--- Function yahan khatam hona chahiye!