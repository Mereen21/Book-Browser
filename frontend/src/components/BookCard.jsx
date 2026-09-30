import "../css/BookCard.css"
import {useBookContext} from "../contexts/BookContexts"
function BookCard({book}) {
    const {addToFavorites, removeFromFavorites, isFavorite} = useBookContext();
    const favorite = isFavorite(book.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(book.id);
        else addToFavorites(book);
        
    }

    const info = book.volumeInfo;
    return (
    <div className="book-card">
        <div className="book-cover">
        {info?.imageLinks?.thumbnail && (
            <img
            src={info.imageLinks.thumbnail}
            alt={info.title || "Book cover"}
            />
        )}
        
        <div className="book-overlay">
            <button
                type="button"
                className={`favorite-btn ${favorite ? "active" : ""}`}
                onClick={onFavoriteClick}
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                aria-pressed={favorite}
            >
            ♥︎
            </button>
        </div>
        </div>

        <div className="book-info">
        <h3>{info?.title || "Untitled"}</h3>
        <p>{info?.publishedDate || "Publication date unavailable"}</p>
        </div>
    </div>
    );
}

export default BookCard