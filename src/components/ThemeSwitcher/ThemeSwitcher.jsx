import { useContext } from "react"
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const ThemeSwitcher = () => {
    const { theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <p>Theme actuel {theme}</p>
            <button onClick={toggleTheme}>changer theme</button> 
        </div>
    )
}

export default ThemeSwitcher