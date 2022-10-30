import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import cross from '../images/cross.svg';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
/*import like from '../src/images/like.svg';
import likeActive from '../src/images/like-active.svg';


import trash from '../src/images/trash.png';*/

function App() {

  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();

  function handleEditAvatarClick() {
    /*document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');*/
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    /*document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');*/
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    /*document.querySelector('.popup_type_add-card').classList.add('popup_opened');*/
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page" >
      
      <Header />
      
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >  
        <input className="form__input form__input_field_name" id="profile-name" placeholder="Введите Ваше имя" type="text" name="name" minLength="2" maxLength="40" required />
          <span className="form__input-error" id="profile-name-error"></span>
        <input className="form__input form__input_field_activity" id="profile-activity" placeholder="Ведите Вашу сферу деятельности" type="text" name="about" minLength="2" maxLength="200" required />
          <span className="form__input-error" id="profile-activity-error"></span>
      </PopupWithForm>

      <PopupWithForm 
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="form__input form__input_field_place" id="card-name" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required />
          <span className="form__input-error" id="card-name-error"></span>
        <input className="form__input form__input_field_link" id="card-link" placeholder="Ссылка на картинку" type="url" name="link" required />
          <span className="form__input-error" id="card-link-error"></span>
      </PopupWithForm>    

      <PopupWithForm 
        name="delete-card"
        title="Вы уверены?"
      >
      </PopupWithForm> 

      <PopupWithForm 
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input className="form__input form__input_field_avatar" id="avatar-link" placeholder="Ссылка на картинку" type="url" name="avatar" required />
          <span className="form__input-error" id="avatar-link-error"></span>
      </PopupWithForm> 

      <ImagePopup></ImagePopup>

      {/*<div className="popup popup_type_edit-profile"> 
        <div className="popup__conteiner">
          <button className="popup__close popup__close_type_edit-profile" type="button">
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <form className="form form_type_edit-profile" name="edit-profile" noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <input className="form__input form__input_field_name" id="profile-name" placeholder="Введите Ваше имя" type="text" name="name" minLength="2" maxLength="40" required />
              <span className="form__input-error" id="profile-name-error"></span>
            <input className="form__input form__input_field_activity" id="profile-activity" placeholder="Ведите Вашу сферу деятельности" type="text" name="about" minLength="2" maxLength="200" required />
              <span className="form__input-error" id="profile-activity-error"></span>
            <button className="form__save" type="submit">Сохранить</button>
          </form>
        </div>
  </div>
      
      <div className="popup popup_type_add-card"> 
        <div className="popup__conteiner">
          <button className="popup__close popup__close_type_add-card" type="button">
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <form className="form form_type_add-card" name="add-card" noValidate>
            <h2 className="form__title">Новое место</h2>
            <input className="form__input form__input_field_place" id="card-name" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required />
              <span className="form__input-error" id="card-name-error"></span>
            <input className="form__input form__input_field_link" id="card-link" placeholder="Ссылка на картинку" type="url" name="link" required />
              <span className="form__input-error" id="card-link-error"></span>
            <button className="form__save" type="submit">Сохранить</button>
          </form>
        </div>
      </div> 

      <div className="popup popup_type_photo"> 
        <div className="popup__conteiner-photo">
          <img className="popup__photo" />
          <button className="popup__close popup__close_type_photo" type="button">
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <h2 className="popup__title"></h2>
        </div>
      </div>
    

      <div className="popup popup_type_delete-card"> 
        <div className="popup__conteiner">
          <button className="popup__close popup__close_type_delete-card" type="button">
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <form className="form form_type_delete-card" name="delete-card" noValidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__save" type="submit">Да</button>
          </form>
        </div>
      </div> 
    
      <div className="popup popup_type_edit-avatar"> 
        <div className="popup__conteiner">
          <button className="popup__close popup__close_type_edit-avatar" type="button">
            <img className="popup__close-cross" src={cross} alt="" />
          </button>
          <form className="form form_type_edit-avatar" name="edit-avatar" noValidate>
            <h2 className="form__title">Обновить аватар</h2>
            <input className="form__input form__input_field_avatar" id="avatar-link" placeholder="Ссылка на картинку" type="url" name="avatar" required />
              <span className="form__input-error" id="avatar-link-error"></span>
            <button className="form__save" type="submit">Сохранить</button>
          </form>
        </div>
  </div>*/}
    
    </div>  
  );
}

export default App;
