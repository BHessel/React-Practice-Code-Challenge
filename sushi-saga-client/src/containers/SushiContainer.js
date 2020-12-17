import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} moneyLeft={props.moneyLeft} addPlates={props.addPlates} eaten={props.eatenPlates.includes(sushi.id)}/>)
        } 
        <select onChange={props.servingSushiChangeHandler} value={props.servingSushi}>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
        <MoreButton handleSushiRotation={props.handleSushiRotation}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer