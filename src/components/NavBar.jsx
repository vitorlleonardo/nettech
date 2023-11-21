import { MdOutlineWbSunny } from "react-icons/md";
import '../styles/components/navbar.sass'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function NavBar() {
  const { toggleTheme} = useContext(ThemeContext);
  return (
    <nav className="NavBar">
        <div>
            <MdOutlineWbSunny id="toggleTheme" onClick={toggleTheme}/>
        </div>
    </nav>
  )
}
