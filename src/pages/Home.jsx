import { Link } from 'react-router-dom'
import '../styles/components/home.sass'

export default function Home() {
    const escapeText = 
`<!DOCTYPE html>
<html>
    <head>
        <title>Exemplo</title>
    </head>

    <body>
        <h1>Aprendendo mais sobre HTML.</h1>
        <p>HTML é uma linguagem de marcação.</p>
    </body>
</html>`
  return (
    <div className="Home">
        <h1>Introdução ao HTML</h1>
        <p>O que e o HTML?</p>
        <ul>
            <li>HTML significa Hyper Text Markup Language (Linguagem de marcação de hipertexto)</li>
            <li>HTML é a linguagem de marcação padrão para criar páginas da Web</li>
            <li>HTML descreve a estrutura de uma página da Web</li>
            <li>Os elementos HTML informam ao navegador como exibir o conteúdo</li>
        </ul>

        <h1>Um exemplo simples em HTML</h1>
        <div className='box-code'>
            <pre>{escapeText}</pre>
        </div>
        <h1>Significado de cada tag</h1>
        <ul className='code-block'>
            <li>&lt;!DOCTYPE html&gt;: Esta declaração define que o documento é um documento HTML5.</li>
            <li>&lt;html&gt;: O elemento &lt;html&gt; é o elemento raiz de uma página HTML, contendo todo o conteúdo.</li>
            <li>&lt;head&gt;: O elemento &lt;head&gt; contém meta informações sobre a página HTML.</li>
            <li>&lt;title&gt;: O elemento &lt;title&gt; especifica o título da página HTML, exibido na barra de título do navegador ou na guia da página.</li>
            <li>&lt;body&gt;: O elemento &lt;body&gt; define o corpo do documento, sendo o contêiner para todo o conteúdo visível, como títulos, parágrafos, imagens, hiperlinks, tabelas, listas, etc.</li>
            <li>&lt;h1&gt;: O elemento &lt;h1&gt; define um título de primeiro nível.</li>
            <li>&lt;p&gt;: O elemento &lt;p&gt; define um parágrafo.</li>
        </ul>
        <div className="previous">
            <Link to='/Editor'><button>Proximo</button></Link>
        </div>
    </div>
  )
}
