import React, { useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext.js";
import Card from "./Card.jsx";

const CardList = (props) => {
  const { userData } = useContext(UserDataContext);

  if (!userData) {
    return <div>userData is null</div>;
  }

  return (
    <div className="cardList">
      {userData.listData.map((listItem, index) => (
        // TODO Change this to card
        <div key={index}>
          {listItem.amount}
        </div>
        // <Card key={index} li={listItem} />
      ))}
    </div>
  );
};

export default CardList;
