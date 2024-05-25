import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    // Cargar el menú desde MockAPI
    axios.get('https://mockapi.io/menus')
      .then(response => setMenu(response.data))
      .catch(error => console.error(error));
  }, []);

  const addMeal = (day, meal) => {
    // Lógica para agregar una comida a un día específico
  };

  const removeMeal = (mealId) => {
    // Lógica para eliminar una comida
  };

  return (
    <div>
      <h1>Menú Semanal</h1>
      {menu.map(day => (
        <Day key={day.id} day={day} addMeal={addMeal} removeMeal={removeMeal} />
      ))}
    </div>
  );
};

export default MenuPage;