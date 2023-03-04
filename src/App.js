import "./styles.css";
import { useState } from "react";

function App() {
  return (
    <div className="App" onLoad={checkFirstLaunch()}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!jjj</h2>
      {/* <TaskItem title="Title" description="description" /> */}
    </div>
  );
}

export default App;
