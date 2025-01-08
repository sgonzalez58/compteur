import { useState } from "react";
import IsbnInput from "../IsbnInput/IsbnInput";

const BookForm = ({updateBookList, bookList}) => {

    const [formData, setFormData] = useState({
        name: '',
        numberOfPages: 0,
        author: '',
        isbn: ''
    })

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const numberOfPagesInt = parseInt(formData.numberOfPages);
        if(formData.name.length === 0) return null;
        if(numberOfPagesInt === 0) return null;
        if(formData.author.length === 0) return null;

        const newEntry = {
            Authors : [formData.author],
            name : formData.name,
            numberOfPages : numberOfPagesInt,
            isbn : formData.isbn
        }
        const newBookList = bookList;
        newBookList.push(newEntry)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name= "name" onChange={handleChangeInput} value={formData.name} required/>
            <br/>
            <label htmlFor="numberOfPages">Number of pages</label>
            <input type="text" name= "numberOfPages" onChange={handleChangeInput} value={formData.numberOfPages} required/>
            <br/>

            <label htmlFor="author">Author</label>
            <input type="text" name= "author" onChange={handleChangeInput} value={formData.author} required/>
            <br/>

            <IsbnInput name="isbn" onChange={handleChangeInput}/>
            
            <input type="submit" value='Add new book'/>
        </form>
    )
}

export default BookForm