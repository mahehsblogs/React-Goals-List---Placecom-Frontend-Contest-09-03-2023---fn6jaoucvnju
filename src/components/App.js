import React, { useState } from 'react';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (newGoal) => {
    setGoalsList((prevGoalsList) => [...prevGoalsList, newGoal]);
  };

  return (
    <div>
      <h1>Goals App</h1>
      <GoalForm onAddGoal={addGoalHandler} />
      <ListOfGoals goalsList={goalsList} />
    </div>
  );
}

export default App;
