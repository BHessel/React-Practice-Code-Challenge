import React, { Fragment, useState } from "react";

const Table = (props) => {
  const [cash, setCash] = useState(0);

  const cashChangeHandler = (event) => {
    setCash(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.addCashHandler(+cash);
    setCash(0);
  };

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return (
        <div className="empty-plate" style={{ top: -7 * index }} key={x} />
      );
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.moneyLeft} remaining!</h1>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          type="number"
          name="cash"
          value={cash}
          onChange={cashChangeHandler}
        />
        <input type="submit" value="add cash" />
      </form>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenPlates)
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
