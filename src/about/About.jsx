import aboutImagem from '../assets/Denise.png'

function About() {
    return(
        <div className="about">
            <h2>Prazer, Denise</h2>
            <img src={aboutImagem}/>
            <p>Aluna de Front-end turma On17 na Reprograma. 
                Em transição de carreira, estudante e grande 
                entusiasta de Tecnologia e Geografia. 
            </p>

        </div>
    )
}

export default About