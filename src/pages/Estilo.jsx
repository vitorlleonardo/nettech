import { Link } from "react-router-dom"
import '../styles/components/estilo.sass'

export default function Estilo() {
    const scapeText = `<p style="color: blue; font-size: 16px;">Este é um parágrafo estilizado.</p>
    `;
    const secondCode = `<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
`;
    const thirdCode = `<head>
    <link rel="stylesheet" href="estilos.css">
</head>
`;
  return (
    <div className='Estilo'>
        <h1>Estilizando Páginas Web: Explorando o Estilo em HTML</h1>
        <p>O HTML (HyperText Markup Language) é a espinha dorsal da web, fornecendo a estrutura e o conteúdo básico para todas as páginas que navegamos. No entanto, a apresentação visual e o design atraente são igualmente importantes para uma experiência de usuário envolvente. É aqui que entra o CSS (Cascading Style Sheets) para complementar o HTML, trazendo vida e estilo às páginas da web.</p>
        <h1>O Papel do Estilo em HTML</h1>
        <p>O HTML é responsável pela estruturação do conteúdo, mas carece de recursos para estilização avançada. É aí que o CSS se destaca, permitindo o controle preciso da aparência e do layout dos elementos HTML. Ao separar a estrutura do conteúdo da sua apresentação visual, o CSS fornece flexibilidade e poder para personalizar cada aspecto visual da página.</p>
        <h1>A integração do CSS com o HTML pode ser feita de várias maneiras</h1>
        <h4>Estilos Embutidos</h4>
        <div className="block-code">
            <pre>{scapeText}</pre>
        </div>
        <h4>Estilo Interno</h4>
        <div className="block-code">
            <pre>{secondCode}</pre>
        </div>
        <h4>Estilo Externo</h4>
        <div className="block-code">
            <pre>{thirdCode}</pre>
        </div>
        <div className="previous-and-back">
            <Link to='/Atributos'><button>Voltar</button></Link>
            <Link to='/'><button>Proximo</button></Link>
        </div>
    </div>
  )
}
