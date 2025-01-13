import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "hello",
    },
  ]);
  const [inputNotes, setInputNotes] = useState("");

  return (
    <div className="App">
      <h1>Notes</h1>
      <div className="note-input">
        <input type="text" name="" id="" placeholder="Add a note" />
        <button>Add</button>
      </div>
      <ul className="note-list">
        {notes.map((note) => {
          return (
            <>
              <li key={note.id}>{note.text}</li>
              <button>Delete</button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
