import projetos from "../dados";

function Cartao() {
    return(
        <div className="cartao-container">
            <div className="cartao">
                {projetos.map(projeto =>{
                    return(
                        <>
                        <h4>{projeto.nome}</h4>
                        <img src={projeto.imgsrc} />
                        <p>{projeto.aprendizado}</p>
                      </>
                    )
                })}


            </div>


        </div>
    )
}

export default Cartao

function dados() {

}