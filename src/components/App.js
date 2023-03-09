import React, { useState } from "react";
import "../styles/App.css";
import GoalForm from "./GoalForm";
import ListOfGoals from "./ListOfGoals";

const App = () => {
  const [allGoals, setAllGoals] = useState([]);

  return (
    <div id="main">
      <GoalForm setAllGoals={setAllGoals} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
};

export default App;
