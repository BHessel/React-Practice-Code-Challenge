import React, { Fragment, useState } from "react";

const Sushi = (props) => {
  const {img_url, name, price} = props.sushi;
  const [eaten, setEaten] = useState(false)

  const eatSushi = (price) => {
    setEaten(true)
    //call function from app.js
    //add sushi id to the plates
    props.addPlates(price)
  }



  return (
    <div className="sushi">
      <div className="plate" onClick={() => (props.moneyLeft - price < 0) ? null : eatSushi(price)}>
        {
          /* Tell me if this sushi has been eaten! */
          eaten ? null : (
            <img src={img_url} width="100%" />
          )
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;

