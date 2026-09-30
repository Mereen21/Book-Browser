import BookCard from "../components/BookCard";
import "../css/Home.css";
import {useState, useEffect} from "react";
import {searchBooks, getPopularBooks} from "../services/googleBooksApi";

const PAGE_SIZE = 20;

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [activeQuery, setActiveQuery] = useState("");
    const [books,setBooks]=useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [error,setError]=useState(null);
    const [loading, setLoading]= useState(true);
    useEffect(()=>{
        let isCurrent = true;
        const loadPopularBooks=async ()=>{
            try{
                const page = await getPopularBooks(0, PAGE_SIZE);
                if (isCurrent) {
                    setBooks(page.items);
                    setTotalItems(page.totalItems);
                }
            }catch(err) {
                if (isCurrent) setError(err.message || "Failed to load books.");
            } finally{
                if (isCurrent) setLoading(false);
            }
        }
        loadPopularBooks()
        return () => {
            isCurrent = false;
        };
    },[])

    const handleSearch=async (e)=>{
        e.preventDefault();
        const query = searchQuery.trim();
        setActiveQuery(query);
        setBooks([]);
        setTotalItems(0);
        setError(null);
        setLoading(true);
        try {
            const page = query
                ? await searchBooks(query, 0, PAGE_SIZE)
                : await getPopularBooks(0, PAGE_SIZE);
            setBooks(page.items);
            setTotalItems(page.totalItems);
        } catch (err) {
            setError(err.message || "Failed to search books.");
        } finally {
            setLoading(false);
        }
    }

    const handleLoadMore = async () => {
        setLoading(true);
        setError(null);
        try {
            const page = activeQuery
                ? await searchBooks(activeQuery, books.length, PAGE_SIZE)
                : await getPopularBooks(books.length, PAGE_SIZE);
            setBooks((currentBooks) => [...currentBooks, ...page.items]);
            setTotalItems(page.totalItems);
        } catch (err) {
            setError(err.message || "Failed to load more books.");
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for books..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                /> 
                <button type="submit" className="search-button" disabled={loading}>Search</button>
            </form>

            {error && <p className="home-status" role="alert">{error}</p>}
            {loading && <p className="home-status">Loading books...</p>}
            {!loading && !error && books.length === 0 && (
                <p className="home-status">No books found. Try another title.</p>
            )}
            <div className="book-grid">
                {books.map((book) => <BookCard book={book} key={book.id} />)}
            </div>

            {books.length < totalItems && (
                <div className="load-more-container">
                    <button
                        type="button"
                        className="load-more-button"
                        onClick={handleLoadMore}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Load more"}
                    </button>
                </div>
            )}
        </div>
    )
}
export default Home;