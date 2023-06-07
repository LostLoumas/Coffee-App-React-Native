import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (item) => {
    setFavoriteItems((prevItems) => [...prevItems, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const isItemFavorite = (itemId) => {
    return favoriteItems.some((item) => item.id === itemId);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isItemFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
