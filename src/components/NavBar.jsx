import { MdOutlineWbSunny } from "react-icons/md";
import '../styles/components/navbar.sass'

export default function NavBar() {
  return (
    <nav className="NavBar">
        <div>
            <input type="text" name="" id="" placeholder="Search"/>
        </div>
        <div>
            <MdOutlineWbSunny id="toggleTheme"/>
        </div>
    </nav>
  )
}
