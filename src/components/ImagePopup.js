import cross from '../images/cross.svg';

function ImagePopup() {
    return(
      <div className="popup popup_type_photo"> 
        <div className="popup__conteiner-photo">
          <img className="popup__photo" />
          <button className="popup__close popup__close_type_photo" type="button">
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <h2 className="popup__title"></h2>
        </div>
      </div>    
    )
}

export default ImagePopup;