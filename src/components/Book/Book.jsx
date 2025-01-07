const Book = (props) => {
    const { name, isbn, numberOfPages, authors } = props
    return (
        <>
            <img src={`https://covers.openlibrary.org/b/isbn/${props.isbn}-L.jpg`}/>
        </>
    )
}

export default Book