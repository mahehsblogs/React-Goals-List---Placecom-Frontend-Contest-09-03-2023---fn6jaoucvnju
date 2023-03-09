import React from "react";

const ListOfGoals = ({ allGoals }) => {
  return (
    <ul>
      {allGoals.map((goal, index) => (
        <li key={index}>
          <p>
            My goal is to {goal.goal}, by {goal.by}.
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ListOfGoals;