import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const[selectedCard, setSelectedCard] = useState({});
  const[currentUser, setCurrentUser] = useState({});
  const[cards, setCards] = useState([]);

  useEffect(() =>{
    api.getUserInfo()
       .then((name, about, avatar) => {
         setCurrentUser(name, about, avatar)
       })
       .catch((err) => console.log(err))
  }, []);

  useEffect(() =>{
    api.getInitialCards()
       .then((data) =>{
         setCards(data);
       }) 
       .catch((err) => console.log(err))
}, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});  
  }

  function handleCardClick(link, name) {
    setSelectedCard({
      link: link,
      name: name
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
       .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
       })
       .catch((err) => console.log(err))
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
       .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id))
       })
       .catch((err) => console.log(err))
  }

  function handleUpdateUser(userInfo) {
    api.editProfile(userInfo)
       .then((updatedInfo) => {
          setCurrentUser(updatedInfo);
          closeAllPopups();
       })
       .catch((err) => console.log(err))
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar)
       .then((updatedAvatar) => {
          setCurrentUser(updatedAvatar);
          closeAllPopups();
       })
       .catch((err) => console.log(err))
  }

  function handleAddPlaceSubmit(card) {
    api.addNewCard(card)
       .then((newCard) => {
          setCards([newCard, ...cards]); 
          closeAllPopups();
       })
       .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" >
        
        <Header />
        
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        >
        </EditProfilePopup>

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        >
        </AddPlacePopup>

        <PopupWithForm 
          name="delete-card"
          title="Вы уверены?"
          buttonText="Да"
        >
        </PopupWithForm> 

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        >
        </EditAvatarPopup>

        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
          link={selectedCard}
          isOpen={selectedCard}
        >
        </ImagePopup>
      
      </div>  
    </CurrentUserContext.Provider>
  );
}

export default App;
