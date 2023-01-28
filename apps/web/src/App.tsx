import React, { useEffect, useState } from "react";
import { Link } from "ui";
import "./App.css";
import Note from "types/src/Note";
import { NotesClient } from "client/client";

const notesClient = new NotesClient({
  BASE: "http://localhost:5000"
});

function App() {

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    notesClient.default.getNotes()
      .then(setNotes);
  }, []);

  console.log(notes);

  return (
    <div className="App">

      <h1>The notes</h1>
      <div>
        {notes.map(d => <p>{d.message}</p>)}
      </div>
    </div>
  );
}

export default App;
