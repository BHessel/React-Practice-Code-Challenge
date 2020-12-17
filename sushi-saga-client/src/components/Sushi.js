import React, { useState, useEffect } from "react";

const Sushi = (props) => {
  const { img_url, name, price, id } = props.sushi;
  const [eaten, setEaten] = useState(false); //hook for state

  useEffect(() => {
    //ComponentDidMount
    if (props.eaten) setEaten(true);
  });

  const eatSushi = (price, id) => {
    if (props.moneyLeft - price > -1) {
      setEaten(true);
      //call function from app.js
      //add sushi id to the plates
      props.addPlates(price, id);
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(price, id)}>
        {
          /* Tell me if this sushi has been eaten! */
          eaten ? null : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {`${id}. ${name}`} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
