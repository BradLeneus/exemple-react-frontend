import Card from "./Card"
import "./CardList.css"

function CardList({posts}){
    return (
        <ul className="card-list">
            {posts.map(card => <Card key={card.id} card={{...card}}/>)}
        </ul>
    )
}

export default CardList