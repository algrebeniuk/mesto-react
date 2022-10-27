import profileAvatar from '../images/Profile-avatar.jpg';
import pen from '../images/pen.svg';
import plus from '../images/plus.svg';

function Main() {
    return(
       <main className="content">
        <section className="profile">
          <button className="profile__avatar-edit" onClick={
            function handleEditAvatarClick() {
                document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
            }
          }>
            <img className="profile__avatar" src={profileAvatar} alt="" /> 
          </button>
          <div className="profile__info">
            <div className="profile__info-conteiner">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" onClick={
                function handleEditProfileClick() {
                    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
                }
              }>
                <img className="profile__edit-button-pen" src={pen} alt="" />
              </button>
            </div>  
            <p className="profile__activity">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button" onClick={
            function handleAddPlaceClick() {
                document.querySelector('.popup_type_add-card').classList.add('popup_opened');
            }
          }>
            <img className="profile__add-button-plus" src={plus} alt="" />
          </button>
        </section>

        <section className="elements">
          
        </section>
      </main>
    )
}

export default Main;