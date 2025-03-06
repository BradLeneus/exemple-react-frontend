
function Card({card}){
    return (
        <li className="card">
            <img className="card-image" src={card.imageSrc} alt={card.imageAlt} />
            <div className="card-description">
                <h2>{card.title}</h2>
                <p>{card.paragraph}</p>
            </div>
        </li>

    )
}

export default Card 
