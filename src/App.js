import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import CreateTaskForm from "./components/CreateTaskForm";
import "./styles.css";
import { useState } from "react";

function App() {
  const PlannerDataList = JSON.parse(localStorage.getItem("PlannerDataList"));
  const [currentTaskList, setCurrentTaskList] = useState(PlannerDataList[0].data);
  function checkFirstLaunch() {
    if (localStorage.getItem("PlannerDataList") == null) {
      localStorage.setItem(
        "PlannerDataList",
        JSON.stringify([
          { ID: Date.now(), name: "My Tasks", type: "TaskList", data: [] }
        ])
      );
    }
  }

  return (
    <div className="App" onLoad={checkFirstLaunch()}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <TaskItem title="Title" description="description" /> */}
      <TaskList />
      <CreateTaskForm list_ID={PlannerDataList[0].ID} />
    </div>
  );
}

export default App;
