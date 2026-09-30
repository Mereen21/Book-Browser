import {createContext, useState,useContext,useEffect} from "react";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({children})=>{
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites])

    const addToFavorites = (book) => {
        setFavorites(prev => [...prev, book]);
    }   

    const removeFromFavorites = (bookId) => {
        setFavorites(prev => prev.filter(book => book.id !== bookId));
    }

    const isFavorite = (bookId) => {
        return favorites.some(book => book.id === bookId);
    }

    const value={
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        favorites
    }

    return <BookContext.Provider value={value}>
        {children}
    </BookContext.Provider>
}