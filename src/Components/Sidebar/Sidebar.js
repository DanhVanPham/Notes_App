import React, { useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      {!listOpen ? (
        <PlusCircle className="sidebar_add" onClick={() => setListOpen(true)} />
      ) : (
        <MinusCircle
          className="sidebar_minus"
          onClick={() => setListOpen(false)}
        />
      )}
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: `${color}` }}
            onClick={() => props.handleAddNote && props.handleAddNote(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
