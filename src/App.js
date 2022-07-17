import React from "react";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div>
      <h1> Amin Tahriry's Todos </h1>
      <TodoCard title="Work " cardInfo="Do Some graphic design" />
      <TodoCard title="Sleep" cardInfo="Sleep 6 hours" />
      <TodoCard title="Study" cardInfo="Learn How to code in react" />
      <TodoCard title="Workout" cardInfo="do though exercises" />
      <TodoCard title="Coding" cardInfo="Do coding" />
    </div>
  );
}

export default App;
