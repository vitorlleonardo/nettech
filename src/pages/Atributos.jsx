import { Link } from "react-router-dom"
import '../styles/components/atributos.sass'

export default function Atributos() {
    const scapeText = 
    `<a href="https://www.exemplo.com">Link Exemplo</a>
<img src="caminho/da/imagem.jpg" alt="Descrição da Imagem">`
  return (
    <div className="Atributos">
        <h1>Explorando os Atributos em HTML: Enriquecendo a Estrutura da Web</h1>
        <p>No mundo do desenvolvimento web, o HTML (HyperText Markup Language) é a linguagem essencial que estrutura o conteúdo online. Além dos elementos, o HTML também utiliza atributos para fornecer informações adicionais e funcionalidades aos elementos, ampliando suas capacidades e fornecendo detalhes importantes para navegadores e outros sistemas.</p>
        <h1>O Papel dos Atributos em HTML</h1>
        <p>Os atributos são informações extras fornecidas aos elementos HTML que não são expressas diretamente no texto da página. Eles são essenciais para controlar o comportamento, a aparência e a acessibilidade dos elementos, além de fornecer informações úteis para motores de busca e navegadores.</p>
        <h4>Exemplo</h4>
        <div className="block-code">
            <pre>{scapeText}</pre>
        </div>
        <h1>Atributos Comuns em HTML</h1>
        <ul>
            <li>href: Define o destino do link, indicando o URL para onde o usuário será direcionado ao clicar.</li>
            <li>target: Especifica onde abrir o link, se em uma nova janela (_blank) ou na mesma janela (_self).</li>
        </ul>
        <h4>Atributos de Imagem</h4>
        <ul>
            <li>src: Indica o caminho da imagem a ser exibida na página.</li>
            <li>alt: Fornece um texto alternativo para a imagem, crucial para acessibilidade e para descrição da imagem em navegadores que não conseguem exibi-la.</li>
        </ul>
        <h4>Atributos de Formulário</h4>
        <ul>
            <li>action: Especifica para onde os dados do formulário devem ser enviados.</li>
            <li>method: Define o método de envio dos dados, como GET ou POST.</li>
            <li>name e id: Identificam e referenciam elementos do formulário.</li>
        </ul>
        <h4>Atributos Semânticos</h4>
        <ul>
            <li>role: Define o papel semântico do elemento para acessibilidade.</li>
            <li>aria-*: Atributos ARIA (Accessible Rich Internet Applications) ajudam a melhorar a acessibilidade de elementos HTML para leitores de tela.</li>
        </ul>
        <h1>Conclusão</h1>
        <h4>Os atributos desempenham um papel crucial na personalização, acessibilidade e funcionalidade dos elementos HTML. Compreender a variedade de atributos disponíveis e saber como utilizá-los efetivamente é essencial para criar páginas web acessíveis, responsivas e funcionalmente ricas. Ao incorporar os atributos corretos nos elementos HTML, os desenvolvedores podem elevar a experiência do usuário e garantir a compatibilidade com uma ampla gama de dispositivos e navegadores.</h4>
        <div className="previous-and-back">
            <Link to='/Elementos'><button>Voltar</button></Link>
            <Link to='/Estilo'><button>Proximo</button></Link>
        </div>
    </div>
  )
}
