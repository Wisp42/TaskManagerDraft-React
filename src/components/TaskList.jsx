import React, { useState } from "react";
import "../component_styles/TaskList.css";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const PlannerDataList = JSON.parse(localStorage.getItem("PlannerDataList"));
  const [taskList, setTaskList] = useState(PlannerDataList[0].data);
  return (
    <div className="TaskList">
      {taskList.map(function (task) {
        return <TaskItem task={task} key={task.ID} />;
        // return <div>Text</div>;
      })}
    </div>
  );
}

export default TaskList;
