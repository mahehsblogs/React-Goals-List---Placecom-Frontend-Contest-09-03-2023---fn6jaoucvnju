import React from 'react';

function ListOfGoals(props) {
  return (
    <ul>
      {props.goalsList.map((goal) => (
        <li key={goal.id}>
          My goal is to {goal.goal}, by {goal.deadline}.
        </li>
      ))}
    </ul>
  );
}

export default ListOfGoals;
