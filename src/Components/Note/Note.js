import React from "react";
import { Trash2 } from "react-feather";
import "./Note.css";

function Note(props) {
  var date = props.note?.time ? new Date(props.note?.time) : "";
  return (
    <div
      className="note"
      style={{ backgroundColor: `${props.note?.color || "#00d4fe"}` }}
    >
      <textarea
        className="note_text"
        value={props.note?.text}
        onChange={(e) =>
          props.handleChangeTextNote(props.note?.id, e.target.value)
        }
      />
      <div className="note_footer">
        <p className="note_date">
          {date
            ? `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`
            : ""}
        </p>
        <Trash2
          className="note_trash_icon"
          onClick={() =>
            props.handleDeleteNote && props.handleDeleteNote(props.note?.id)
          }
        />
      </div>
    </div>
  );
}

export default Note;
