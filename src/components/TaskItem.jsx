import React from "react";
import "../component_styles/TaskItem.css";

function TaskItem(props) {
  return (
    <div className="TaskItem">
      <div className="TaskInfo">
        <div className="TaskItemTitle">{props.task.title}</div>
        <div className="TaskItemDescription">{props.task.description}</div>
      </div>
    </div>
  );
}

export default TaskItem;
