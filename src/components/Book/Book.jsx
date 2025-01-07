const Book = (props) => {
    const { name, isbn, numberOfPages, authors } = props
    return (
        <>
            <img src={`https://covers.openlibrary.org/b/isbn/${props.isbn}-M.jpg`}/>
        </>
    )
}

export default Book