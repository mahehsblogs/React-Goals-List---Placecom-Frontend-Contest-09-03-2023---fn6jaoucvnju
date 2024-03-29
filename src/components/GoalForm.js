import React, { useState } from 'react';

function GoalForm(props) {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [enteredDeadline, setEnteredDeadline] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const deadlineInputChangeHandler = (event) => {
    setEnteredDeadline(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      goal: enteredGoal,
      deadline: enteredDeadline,
    };
    props.onAddGoal(newGoal);
    setEnteredGoal('');
    setEnteredDeadline('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="goal">Goal</label>
        <input
          name="text"
          id="goal"
          by="goal"
          value={enteredGoal}
          onChange={goalInputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="deadline">By</label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={enteredDeadline}
          onChange={deadlineInputChangeHandler}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default GoalForm;
// this is the comment for this code
