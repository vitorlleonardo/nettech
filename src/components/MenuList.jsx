import { Link } from "react-router-dom"
import '../styles/components/menulist.sass'

export default function MenuList() {
  return (
    <div className="MenuList">
        <h3>Front End</h3>
        <div className="list">
            <p>HTML</p>
            <ul>
                <Link to='/'><li>Introdução</li></Link>
                <Link to='/Editor'><li>IDE</li></Link>
                <Link to='/Elementos'><li>Elementos</li></Link>
                <Link to='/Atributos'><li>Atributos</li></Link>
                <Link to='/Estilo'><li>Estilos</li></Link>
                <Link to='/'><li>Formatação</li></Link>
                <Link to='/'><li>Imagens</li></Link>
            </ul>
            <p>CSS</p>
            <ul>
                <Link to='/'><li>Ínicio</li></Link>
                <Link to='/'><li>Sintaxe</li></Link>
                <Link to='/'><li>Seletor</li></Link>
                <Link to='/'><li>Comentarios</li></Link>
                <Link to='/'><li>Cores</li></Link>
                <Link to='/'><li>Layout</li></Link>
                <Link to='/'><li>Grid</li></Link>
                <Link to='/'><li>FlexBox</li></Link>
            </ul>
            <p>JavaScript</p>
            <ul>
                <Link to='/'><li>Ínicio</li></Link>
                <Link to='/'><li>Sintaxe</li></Link>
                <Link to='/'><li>Variaveis</li></Link>
                <Link to='/'><li>Operadores</li></Link>
                <Link to='/'><li>Tipo de Dados</li></Link>
                <Link to='/'><li>Funções</li></Link>
                <Link to='/'><li>Objetos</li></Link>
                <Link to='/'><li>Strings</li></Link>
            </ul>
        </div>
    </div>  
  )
}
