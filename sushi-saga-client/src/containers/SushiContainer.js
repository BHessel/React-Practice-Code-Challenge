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
        <MoreButton handleSushiRotation={props.handleSushiRotation}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer