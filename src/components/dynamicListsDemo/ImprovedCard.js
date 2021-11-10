import React from "react";
const ImprovedCard = props => {
  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      {/* true && x will evaluate to x */}
      { props.hasOscars && <p>Got the Oscar Award!  </p> }
      { !props.hasOscars && <p>Great movie but no Oscars!  </p> }
        {/* can also do it like this:
        
        {
            props.hasOscars ? 
            
            <p>Got that Oscar!  </p>
            :
            <p>No Oscars here...  </p>
        } 
        */}
      <button onClick={props.clickToDelete}>Delete</button>
    </div>
  );
};
 
export default ImprovedCard;