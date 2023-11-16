import { Outlet } from "react-router-dom"
import './styles/components/app.sass'
import MenuList from "./components/MenuList"
import NavBar from "./components/NavBar"

export default function App() {
    return(
        <div className="App">
            <NavBar />
            <MenuList />
            <Outlet />
        </div>
    )
}