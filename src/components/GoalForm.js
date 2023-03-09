import React, { useState } from "react";

const GoalForm = () => {
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllGoals((prevState) => [
      ...prevState,
      { goal: formData.goal, by: formData.by }
    ]);
    setFormData({ goal: "", by: "" });
  };

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          value={formData.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default GoalForm;