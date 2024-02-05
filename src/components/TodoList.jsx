import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => {
          return (
            <div
              className={`todo ${task.completed ? "completed" : ""}`}
              key={index}
            >
              <div className="todoText">
                <span>{task.text}</span>
              </div>
              <div className="icons">
                <button onClick={() => handleCompleted(task.id)}>
                  <FontAwesomeIcon icon={faCheck} className="fa-check" />
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <FontAwesomeIcon icon={faTrash} className="fa-trash" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
