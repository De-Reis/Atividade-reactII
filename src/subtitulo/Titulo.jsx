import gitImagem from '../assets/github.png'
import linkedinImagem from '../assets/linkedin.png'


function Titulo() {
    return(
        <div className="titulo">
            <div className="redes">
                <a target="blank" href="https://github.com/De-Reis"><img src={gitImagem}/></a>
                <a target="blank" href="https://www.linkedin.com/in/denise-reis-0a643b7b/"><img src={linkedinImagem}/></a>
            </div>
            <hr></hr>
            <h1>4 projetos meus feitos na reprograma</h1>
        </div>
    )
}

export default Titulo