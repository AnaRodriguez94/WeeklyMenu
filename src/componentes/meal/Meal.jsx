/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Meal from './Meal';

const Day = ({ day, addMeal, removeMeal }) => {
  return (
    <div>
      <h2>{day.name}</h2>
      {day.meals.map(meal => (
        <Meal key={meal.id} meal={meal} removeMeal={removeMeal} />
      ))}
      <button onClick={() => addMeal(day.id)}>Add Food</button>
    </div>
  );
};

export default Day;