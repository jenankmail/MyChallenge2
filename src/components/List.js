//import React, { useContext } from "react";
import { places } from "./Data";
import { PlaceContent } from "./MyContext";
//import { MyContext } from "./MyContext";
import Place from "./Place";
//import { MyContext } from "./MyContext";
const List = () => {
 

  const listItems = places.map((place) => (
    <li key={place.id}>
     <PlaceContent.Provider value={{place:place}}>
     <Place  />
     </PlaceContent.Provider>
      
    
      
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default List;
