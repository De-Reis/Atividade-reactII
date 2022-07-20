import { useState, useEffect } from 'react'

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/De-Reis/repos')
        .then(response => response.json())
        .then(data => setCards(data))
    }, [])


    return(
        <>
        {cards.map(card => {
            return(
                <div className="card-container">
                    <div className="card" key={card.id}>
                    <h4>{card.name}</h4>
                    <p>{card.description}</p>
                    
                </div> 

                </div>
            )
        }) }
        </>
    )
}

export default Cards


