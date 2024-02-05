import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      { id: taskList.length, text: inputText, completed: false },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
    </div>
  );
};
