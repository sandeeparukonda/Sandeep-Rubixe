import React from 'react'

const Card1 = (props) => {
  return (
    <div>
      <div className='main_div2'>
        <div className='tiltestyle'>
          <p>
            {props.title}
          </p>
        </div>
        <div>
        <img width="93px" src={props.pic} alt="iot" />
        </div>
        <br/>
        <div className={props.cardhead}>
          <div className='radiusnum'><h2 className={props.claa}>
            {props.number}
          </h2></div>
        </div>
      </div>

    </div>
  )
}

export default Card1
