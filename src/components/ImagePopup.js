import cross from '../images/cross.svg';

function ImagePopup(props) {
    
    return(
      <div className={`popup popup_type_photo ${props.card.link && "popup_opened"}`}> 
        <div className="popup__conteiner-photo">
          <img className="popup__photo" src={props.card.link}/>
          <button className="popup__close popup__close_type_photo" type="button" onClick={props.onClose}> 
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <h2 className="popup__title">{props.card.name}</h2>
        </div>
      </div>    
    )
}

export default ImagePopup;