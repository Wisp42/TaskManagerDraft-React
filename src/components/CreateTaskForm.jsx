import React, { useState } from "react";
import "../component_styles/CreateTaskForm.css";
import Task from "../Task";

function CreateTaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask(event) {
    event.preventDefault();
    const PlannerDataList = JSON.parse(localStorage.getItem("PlannerDataList"));
    for (let i = 0; i < PlannerDataList.length; i++) {
      if (PlannerDataList[i].ID == props.list_ID) {
        console.log(PlannerDataList[i].name);
        if (title != "") {
          PlannerDataList[i].data = [
            ...PlannerDataList[i].data,
            new Task({
              title: title,
              description: description,
              listID: parseInt(props.list_ID)
            })
          ];
          console.log(PlannerDataList);
          localStorage.setItem(
            "PlannerDataList",
            JSON.stringify(PlannerDataList)
          );
          console.log(localStorage.getItem("PlannerDataList"));
        }
      }
    }
  }
  return (
    <>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div className="CreateTaskForm">
        <div className="CreateTaskTitleWrapper">
          <input
            type="text"
            className="CreateTaskTitle"
            placeholder="Enter task title..."
            onChange={function (event) {
              event.preventDefault();
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="CreateTaskDescriptionWrapper">
          <textarea
            className="CreateTaskDescription"
            placeholder="Enter task description..."
            onChange={function (event) {
              event.preventDefault();
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <div className="SendTaskDataWrapper">
          <input
            type="submit"
            value="Send"
            className="SendTaskData"
            onClick={addTask}
          />
        </div>
      </div>
    </>
  );
}

export default CreateTaskForm;
