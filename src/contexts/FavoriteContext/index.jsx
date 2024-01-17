import { createContext, useContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [updatedFavorites, setUpdatedFavorites] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('favItems')) || [];
    setFavoriteItems(favoriteItems);
  }, []);

  useEffect(() => {
    console.log('FAVORITOS ATUALIZADO', favoriteItems);
  }, [favoriteItems, updatedFavorites]);

  const addFavorite = (item) => {
    const newFavoriteItems = [...favoriteItems, item];
    localStorage.setItem('favItems', JSON.stringify(newFavoriteItems));
    setFavoriteItems(newFavoriteItems);
    setUpdatedFavorites(true);
  }

  const removeFavorite = (id) => {
    const newFavoriteItems = favoriteItems.filter((item) => item.id !== id);
    localStorage.setItem('favItems', JSON.stringify(newFavoriteItems));
    setFavoriteItems(newFavoriteItems);
    setUpdatedFavorites(true);
  }

  const isFavorite = (id) => {
    return favoriteItems.some((item) => item.id === id);
  }

  const value = {
    favoriteItems,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}