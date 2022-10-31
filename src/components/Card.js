function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card.link, card.name);
    }
    
    return(
        <article className="element">
              <button className="element__delete" type="button"></button>
              <img src={card.link}  alt={card.name} className="element__photo" onClick={handleClick} /> 
              <div className="element__description">  
                <h2 className="element__title">{card.name}</h2>
                  <div className="element__like-conteiner">
                    <button className="element__like" type="button"></button>
                      <span className="element__like-count">{card.likes.length}</span>
                  </div>  
              </div>  
        </article>
    )
}

export default Card;