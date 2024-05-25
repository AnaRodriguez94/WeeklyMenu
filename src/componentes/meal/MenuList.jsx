/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Meal = ({ meal, removeMeal }) => {
  return (
    <div>
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <p>{meal.type}</p>
      <button onClick={() => removeMeal(meal.id)}>Delete</button>
    </div>
  );
};

export default Meal;