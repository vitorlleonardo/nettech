import { Link } from 'react-router-dom'
import '../styles/components/editor.sass'

export default function Editor() {
  return (
    <div className='Editor'>
        <h1>IDE</h1>
        <p>Os editores de código desempenham um papel crucial na vida de um desenvolvedor. Eles são ferramentas essenciais que facilitam a escrita, a edição e o gerenciamento de código-fonte. Com uma variedade de opções disponíveis, escolher o melhor editor para suas necessidades específicas pode ser desafiador. Aqui estão alguns dos editores mais populares e poderosos atualmente utilizados por desenvolvedores em todo o mundo</p>
        <h1>Os Melhores Editores de Texto para Desenvolvedores</h1>
        <h1>Visual Studio Code</h1>
        <p>O Visual Studio Code, também conhecido como VSCode, ganhou uma grande base de usuários devido à sua extensibilidade e rica coleção de plugins. Desenvolvido pela Microsoft, este editor de código é leve, rápido e oferece suporte para várias linguagens de programação. Sua interface intuitiva, depuração integrada, terminal embutido e integração com controle de versão o tornam uma escolha popular entre desenvolvedores.</p>
        <h1>Sublime Text</h1>
        <p>O Sublime Text é reconhecido por sua velocidade e simplicidade. Com uma interface limpa e descomplicada, oferece recursos poderosos, como edição em várias linhas simultaneamente, atalhos personalizáveis e uma comunidade vibrante que contribui com inúmeros pacotes e temas.</p>
        <h1>Atom</h1>
        <p>Desenvolvido pelo GitHub, o Atom é um editor de código de código aberto e altamente personalizável. Com uma base sólida de pacotes e temas, permite que os usuários o adaptem às suas preferências. Sua integração com o ecossistema GitHub é um ponto forte, e sua facilidade de uso atrai desenvolvedores de todos os níveis de habilidade.</p>
        <h1>JetBrains IntelliJ IDEA</h1>
        <p>Para desenvolvimento em Java e outras linguagens JVM, o IntelliJ IDEA da JetBrains é uma escolha de destaque. Possui uma gama de recursos avançados, como refatoração inteligente, depuração poderosa e suporte a frameworks populares, tornando-o uma ferramenta valiosa para desenvolvedores corporativos e individuais.</p>
        <h1>Vim</h1>
        <p>O Vim é um editor de texto modal que se destaca por sua eficiência e produtividade. Apesar de ter uma curva de aprendizado íngreme, sua capacidade de edição de texto sem a necessidade de um mouse e a enorme quantidade de atalhos o tornam um dos favoritos dos desenvolvedores mais experientes.</p>
        <div className='previous-and-back'>
            <Link to='/'><button>Voltar</button></Link>
            <Link to='/Elementos'><button>Proximo</button></Link>
        </div>
    </div>
  )
}
