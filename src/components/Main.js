import pen from '../images/pen.svg';
import plus from '../images/plus.svg';
import {useEffect, useState} from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

    const[userName, setUserName] = useState('');
    const[userDescription, setUserDescription] = useState('');
    const[userAvatar, setUserAvatar] = useState('');
    const[cards, setCards] = useState([]);

    useEffect(() =>{
        api.getUserInfo()
          .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .catch((err) => console.log(err))
    }, [])

    useEffect(() =>{
        api.getInitialCards()
          .then((data) =>{
            setCards(data);
          }) 
          .catch((err) => console.log(err))
    }, [])
    
    return(
       <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
            <img className="profile__avatar-img" src={userAvatar}    alt="" /> 
          </div>
          <div className="profile__info">
            <div className="profile__info-conteiner">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                <img className="profile__edit-button-pen" src={pen} alt="" />
              </button>
            </div>  
            <p className="profile__activity">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
            <img className="profile__add-button-plus" src={plus} alt="" />
          </button>
        </section>

        <section className="elements">
          
          {cards.map((card) => (
            <Card 
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
              card={card}
            >
            </Card>
          ))}
          
        </section>

      </main>
    )
}

export default Main;