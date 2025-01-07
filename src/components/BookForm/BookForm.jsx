

const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    let book = {name: event.nativeEvent.srcElement[0].value, isbn: 'test.png'};
    console.log(book)
}

const BookForm = (props) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name= "book-title" />

            <button type="submit">Valider</button>
        </form>
    )
}

export default BookForm