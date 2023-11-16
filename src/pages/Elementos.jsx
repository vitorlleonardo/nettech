import { Link } from 'react-router-dom'
import '../styles/components/elementos.sass'

export default function Elementos() {
  const scapeText = 
`<!DOCTYPE html>
  <html>
      <head>
          <title>Titulo da Página</title>
      </head>
  
      <body>
          <!-- CONTEUDO DA PÁGINA -->
      </body>
  </html>`
  return (
    <div className="Elementos">
        <h1>HTML: Explorando os Elementos Fundamentais para Construir a Web</h1>
        <p>Quando se trata de criar conteúdo para a internet, o HTML (HyperText Markup Language) é a espinha dorsal que dá forma à maioria das páginas da web que navegamos diariamente. Esse poderoso conjunto de elementos fornece a estrutura necessária para organizar informações e apresentá-las de forma coerente e acessível. Vamos explorar alguns dos elementos fundamentais do HTML e entender como cada um desempenha um papel crucial na construção da experiência online.</p>
        <h1>A Linguagem de Estruturação: HTML</h1>
        <p>O HTML é uma linguagem de marcação que utiliza uma série de elementos para descrever a estrutura de uma página web. Cada elemento tem sua função específica, desde definir cabeçalhos e parágrafos até incorporar imagens, vídeos e links.<br />Estrutura Básica de um Documento HTML<br />Todo documento HTML começa com a estrutura básica:
        </p>
        <div className="block-code">
          <pre>{scapeText}</pre>
        </div>
        <h1>Elementos Fundamentais do HTML</h1>
        <h4>Tags de Texto</h4>
        <ul>
          <li>&lt;h1&gt; ao &lt;h6&gt;: Esses elementos representam os diferentes níveis de cabeçalhos, do mais importante (h1) ao menos importante (h6).</li>
          <li>&lt;p&gt;: Utilizado para parágrafos de texto.</li>
          <li>&lt;strong&gt; e &lt;em&gt;: Para enfatizar texto, &lt;strong&gt; para ênfase forte e &lt;em&gt; para ênfase enfática, geralmente exibidos em negrito e itálico, respectivamente.</li>
        </ul>
        <h4>Elementos de Links e Imagens</h4>
        <ul>
          <li>&lt;a&gt;: Cria um link para outra página web ou recurso, onde href é o atributo que define o destino do link.</li>
          <li>&lt;img&gt;: Insere uma imagem na página, onde src especifica o caminho da imagem e alt fornece uma descrição alternativa para acessibilidade.</li>
        </ul>
        <h4>Estrutura e Seções</h4>
        <ul>
          <li>&lt;div&gt; e &lt;span&gt;: &lt;div&gt; é um contêiner de bloco usado para agrupar elementos e aplicar estilos, enquanto &lt;span&gt; é um contêiner inline, frequentemente utilizado para estilização de texto.</li>
          <li>&lt;header&gt;, &lt;footer&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;: Esses elementos ajudam a dividir o conteúdo da página em partes significativas para uma melhor organização e acessibilidade.</li>
        </ul>
        <h4>Elementos Semanticos</h4>
        <ul>
          <li>&lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;: Introduzidos no HTML5, esses elementos adicionam significado semântico ao conteúdo, facilitando a compreensão do layout e da estrutura da página para os navegadores e leitores de tela.</li>
        </ul>
        <h1>Conclusão</h1>
        <h4>O HTML é a espinha dorsal da web moderna, permitindo que desenvolvedores e criadores organizem e apresentem informações de maneira clara e estruturada. Cada elemento desempenha um papel crucial na construção de uma experiência online coesa e acessível para os usuários. Ao entender e utilizar efetivamente esses elementos, é possível criar páginas web mais funcionais, informativas e visualmente atraentes.</h4>
        <div className='previous-and-back'>
            <Link to='/Editor'><button>Voltar</button></Link>
            <Link to='/Atributos'><button>Proximo</button></Link>
        </div>
    </div>
  )
}
