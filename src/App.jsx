import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './App.css'
import Book from './components/Book/Book'
import BookForm from './components/BookForm/BookForm'
import BookDetails from './components/BookDetails/BookDetails';

function App() {
    
    const bookListAPIaddress = 'https://anapioficeandfire.com/api/books'

    const [bookList, setBookList] = useState([])
    const [filled, setFilled] = useState(false)

    useEffect(()=>{
        fetch(bookListAPIaddress)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setBookList(data)
                setFilled(true)
            })
            .catch((error) => console.error(error.message))
    }, [])
    

    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path="/" element={
                        <header className='App-header'>
                            {
                                filled ? bookList.map((bookItem) => bookItem && <Link to={`/book/${bookItem.isbn}`} key={`link_book_${bookItem.isbn}`}>
                                                                                    <Book name={bookItem.name}
                                                                                        isbn={bookItem.isbn}
                                                                                        numberOfPages={bookItem.numberOfPages}
                                                                                        authors={bookItem.authors} key={`book_${bookItem.isbn}`}
                                                                                    />
                                                                                </Link>) : <h2>Loading...</h2>
                            }
                        </header>
                    }
                    />
                    <Route path="/book/:isbn"
                        element={<BookDetails books={bookList}/>}
                    />
                    <Route path="/new" element={<BookForm updateBookList={setBookList} bookList={bookList}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App