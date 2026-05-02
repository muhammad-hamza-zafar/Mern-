import { useState } from 'react';
export default function QuickNotes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  // function 
  const addNote = () => {
    if (!input.trim()) return;
    // TODO: Add new note object to notes array immutably
 const newNote = { 
  id: Date.now(), 
  text: input, 
  createdAt: new Date().toLocaleTimeString() 
};
///// spread
setNotes([...notes, newNote])
    setInput('');
    console.log(notes)
  };
  //////////////////////remove////////////
  const removeNote = (id) => {

  const newnotes = notes.filter(note => note.id !== id);
  

  setNotes(newnotes);
  console.log("Deleted",note)
};
   return (
  <div className="card">
    <h2>📝 Quick Notes</h2>
    <div className="flex">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a quick note..."
        className="input"
      />
      <button onClick={addNote} className="btn">Add</button>
       
    </div>
    <ul className="list">
      {notes.map(note => (
        <li key={note.id} className="list-item">
          <span>{note.text} <small>({note.createdAt})</small></span>
          {/* Fixed the nested button and closing tag below */}
          <button onClick={() => removeNote(note.id)} className="btn-sm">✕</button>
        </li>
      ))}
    </ul>
  </div>
);
}
