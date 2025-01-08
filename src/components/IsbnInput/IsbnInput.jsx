import { useState } from "react"

const IsbnInput = ({name, onChange}) => {
    const [error, setError] = useState({errorStatus: false, errorMessage: ""})

    const handleChange = (e) =>{
        const isbn = e.target.value;
        const isbnWithoutDashes = isbn.replaceAll('-', '');
        if(!isNaN(isbnWithoutDashes)){
            onChange(e)
        }
        setError({errorStatus: true, errorMessage: `Bad ISBN Format`})
    }

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input type="text" name={name} onChange={handleChange}/>
             {error.errorStatus && <h4>{error.errorMessage}</h4>}
             <br/>
        </>
    )
}

export default IsbnInput