import { v4 as uuidv4 } from "uuid";
import cardName from "./visa.png";
import plusIcon from "./plusIcon.png";
import { MdDeleteOutline } from "react-icons/md";
import NewCard from "../NewCard/newcard";
import { useState } from "react";
import "./savedcards.css";

const cardsData = [];

const SavedCards = () => {
  const [newCard, setNewCard] = useState(false);
  const [cardsList, setCardsList] = useState(cardsData);
  const onAddingNewCard = (values) => {
    const { cardNumber, nameOnCard, expiry } = values;
    const newCardDetails = {
      id: uuidv4(),
      cardCompany: `${cardName}`,
      cardType: "",
      cardHolder: `${nameOnCard}`,
      cardNumber,
      validity: `${expiry}`,
    };

    setCardsList([...cardsList, newCardDetails]);
  };

  return (
    <div className="cards-main-cont">
      <h4 className="cards-heading">My Saved Cards</h4>
      <div className="cards-sub-cont">
        <div className="cards-cont">
          {cardsList.map((eachCard) => {
            const deleteCard = () => {
              const filteredCards = cardsList.filter(
                (eachOne) => eachOne.id !== eachCard.id
              );
              setCardsList(filteredCards);
            };
            return (
              <div key={eachCard.id} className="bg-card">
                <div className="card-names-cont">
                  <img
                    className="card-company"
                    src={eachCard.cardCompany}
                    alt="cardName"
                  />
                  <p className="card-type">{eachCard.cardType}</p>
                </div>
                <p className="card-type">{eachCard.cardHolder}</p>
                <div className="card-validity-cont">
                  <div>
                    <p className="card-type">{eachCard.cardNumber}</p>
                    <p className="card-validity">
                      VALID
                      <br />
                      THRU<span> {eachCard.validity}</span>
                    </p>
                  </div>
                  <button
                    onClick={deleteCard}
                    className="delete-button"
                    type="button"
                  >
                    <MdDeleteOutline className="delete-icon" />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="new-card">
            <button
              onClick={() => setNewCard(true)}
              className="plus-button"
              type="button"
            >
              <img src={plusIcon} alt="plus-icon" />
            </button>
            <p>Add Another Card</p>
          </div>
        </div>
      </div>
      {newCard ? <NewCard addingNewCard={onAddingNewCard} /> : null}
    </div>
  );
};

export default SavedCards;
