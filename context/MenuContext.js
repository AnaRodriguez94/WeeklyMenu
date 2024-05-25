import React, { createContext, useState, useEffect } from 'react';
import { getMenus, addMenu, updateMenu, deleteMenu } from '../services/apiService';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then(setMenus);
  }, []);

  const addNewMenu = (menu) => {
    addMenu(menu).then(newMenu => setMenus([...menus, newMenu]));
  };

  const updateExistingMenu = (id, updatedMenu) => {
    updateMenu(id, updatedMenu).then(() => {
      setMenus(menus.map(menu => menu.id === id ? updatedMenu : menu));
    });
  };

  const deleteExistingMenu = (id) => {
    deleteMenu(id).then(() => {
      setMenus(menus.filter(menu => menu.id !== id));
    });
  };

  return (
    <MenuContext.Provider value={{ menus, addNewMenu, updateExistingMenu, deleteExistingMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };