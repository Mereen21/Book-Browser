import "../css/Favorites.css";
import {useBookContext} from "../contexts/BookContexts";
import BookCard from "../components/BookCard";
function Favorites() {
        const {favorites} = useBookContext();
        if(favorites){
            return(
                <div className="favorites-container">
                    <h2>Your Favorites</h2>
                    <div className="favorites-grid">
                        {favorites.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            )
        }
       
}
export default Favorites;