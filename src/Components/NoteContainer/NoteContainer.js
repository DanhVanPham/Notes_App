import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer({ notes, handleChangeText, handleDeleteNote }) {
  return (
    <div className="note-container">
      <div className="note-container_title">
        <h1>Notes App</h1>
      </div>
      <div className="note-container_content custom-scroll">
        <div className="note-container_content_notes">
          {notes &&
            notes.length > 0 &&
            notes.map((note) => (
              <Note
                key={note.id}
                note={note}
                handleChangeTextNote={handleChangeText}
                handleDeleteNote={handleDeleteNote}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default NoteContainer;
