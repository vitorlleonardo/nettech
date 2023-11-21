import { Link } from "react-router-dom"
import '../styles/components/formatacao.sass'

export default function Formatacao() {
    const scapeText = `<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Este é um parágrafo de texto.</p>
    `
  return (
    <div className="Formatacao">
        <h1>Guia para Formatação em HTML: Estilizando Seus Conteúdos na Web</h1>
        <p>A formatação desempenha um papel crucial na apresentação de informações de maneira legível e atraente. Dominar as técnicas de formatação em HTML não só melhora a estética, mas também a acessibilidade e a compreensão do conteúdo. Vamos explorar algumas das principais maneiras de formatar elementos HTML.</p>
        <h1>Tags de Formatação Básica</h1>
        <h4>Títulos e Parágrafos</h4>
        <p>O uso de tags de cabeçalho &lt;h1&gt; a &lt;h6&gt; permite criar diferentes níveis de títulos, onde &lt;h1&gt; é o título principal e &lt;h6&gt; é o de menor hierarquia. Já a tag &lt;p&gt; é usada para parágrafos de texto.</p>
        <div className="block-code">
            <pre>{scapeText}</pre>
        </div>
        <div className="previous-and-back">
            <Link to='/Estilo'><button>Voltar</button></Link>
            <Link to='/'><button>Proximor</button></Link>
        </div>
    </div>
  )
}
