import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "hello",
    },
  ]);
  const [inputNotes, setInputNotes] = useState("");

  function handleInputChange(e) {
    setInputNotes(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputNotes.trim() !== "") {
      const newNotes = {
        id: new Date().getTime(),
        text: inputNotes,
      };

      setNotes([...notes, newNotes]);
      setInputNotes("");
    }
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Add a note" value={inputNotes} onChange={handleInputChange} />
        <button>Add</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => {
          return (
            <>
              <li key={note.id}>{note.text}</li>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
