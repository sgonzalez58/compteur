import { useParams } from 'react-router';

const BookDetails = ({books}) => {
    const { isbn } = useParams();
    const book = books.find(book => book.isbn === isbn)
    const { name, numberOfPages, authors} = book

    return (
        <>
            <img src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}/>
            <div>{name}</div>
            <div>{isbn}</div>
            <div>{numberOfPages}</div>
            <div>{authors[0]}</div>
            <a href="/"> retour </a>
        </>
    )
}

export default BookDetails