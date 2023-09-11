//import React, { useContext } from "react";
import { useContext } from "react";
import { PlaceContent } from "./MyContext";
import PlaceImage from "./PlaceImage";
//import { MyContext } from "./MyContext";

const Place = () => {
const myConvalue=useContext(PlaceContent);
  return (
    <>

      <PlaceImage  />
      <p>
        <b>{myConvalue.place.name}</b>
        {": " + myConvalue.place.description}
      </p>
    </>
  );
};

export default Place;
