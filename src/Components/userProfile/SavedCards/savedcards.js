import { v4 as uuidv4 } from "uuid";
import cardName from "../../HowitWorks/img2.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MdDeleteOutline } from "react-icons/md";
import NewCard from "../NewCard/NewCard";
import { useState } from "react";

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
    <div className="cards-main-cont" data-testid="cards-main-cont">
    <h4 className="cards-heading" data-testid="cards-heading">My Saved Cards</h4>
    <div className="cards-sub-cont" data-testid="cards-sub-cont">
      <div className="cards-cont" data-testid="cards-cont">
        {cardsList.map((eachCard) => {
          const deleteCard = () => {
            const filteredCards = cardsList.filter(
              (eachOne) => eachOne.id !== eachCard.id
            );
            setCardsList(filteredCards);
          };
          return (
            <div key={eachCard.id} className="bg-card" data-testid="bg-card">
              <div className="card-names-cont" data-testid="card-names-cont">
                <img
                  className="card-company"
                  src={eachCard.cardCompany}
                  alt="cardName"
                  data-testid="card-company"
                />
                <p className="card-type" data-testid="card-type">{eachCard.cardType}</p>
              </div>
              <p className="card-type" data-testid="card-holder">{eachCard.cardHolder}</p>
              <div className="card-validity-cont" data-testid="card-validity-cont">
                <div>
                  <p className="card-type" data-testid="card-number">{eachCard.cardNumber}</p>
                  <p className="card-validity" data-testid="card-validity">
                    VALID
                    <br />
                    THRU<span> {eachCard.validity}</span>
                  </p>
                </div>
                <button
                  onClick={deleteCard}
                  className="delete-button"
                  type="button"
                  data-testid="delete-button"
                >
                  <MdDeleteOutline className="delete-icon" data-testid="delete-icon" />
                </button>
              </div>
            </div>
          );
        })}
        <div className="new-card" data-testid="new-card">
          <button
            onClick={() => setNewCard(true)}
            className="plus-button"
            type="button"
            data-testid="plus-button"
          >
            <AddCircleOutlineIcon/>
          </button>
          <p data-testid="add-another-card">Add Another Card</p>
        </div>
      </div>
    </div>
    {newCard ? <NewCard addingNewCard={onAddingNewCard} /> : null}
</div>

  );
};

export default SavedCards;
