import React from "react";
import'../../styles/grid.css';

const FriendCard = props => (
    <div 
      className="card" 
      value={props.id} 
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

export default FriendCard;