import { Outlet } from "react-router-dom"
import './styles/components/app.sass'
import MenuList from "./components/MenuList"
import NavBar from "./components/NavBar"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

export default function App() {
    const { theme } = useContext(ThemeContext);
    return(
        <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
            <NavBar />
            <MenuList />
            <Outlet />
        </div>
    )
}