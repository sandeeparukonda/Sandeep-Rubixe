import React from "react";

const Card2 = (props) => {
  return (
    <div>
      <div className="main_div">
        <div className={props.cardhead}>
          <div className="radiusnum">
            <h2 className={props.claa}>{props.number}</h2>
          </div>
        </div>
        <div>
          <img width="93px" src={props.pic} alt="iot" />
        </div>
        <div className="tiltestyle">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;