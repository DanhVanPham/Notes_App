import { useEffect, useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    let temp = [...notes];
    temp.unshift({
      id: uuidv4(),
      text: "",
      color: color,
      time: Date.now(),
    });
    setNotes(temp);
  };

  const updateText = (id, text) => {
    let temp = [...notes];
    let note_Index = temp.findIndex((note) => note.id === id);
    if (note_Index < 0) return;
    temp[note_Index].text = text;
    setNotes(temp);
  };

  const deleteNote = (id) => {
    let temp = [...notes];
    temp = temp.filter((item) => item.id !== id);
    setNotes(temp);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app">
      <Sidebar handleAddNote={addNote} />
      <NoteContainer
        notes={notes}
        handleChangeText={updateText}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
