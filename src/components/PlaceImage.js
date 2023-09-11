import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { MyContext, PlaceContent } from "./MyContext";
const PlaceImage = () => {
  const contValue=useContext(MyContext)
  const mycont=useContext(PlaceContent)
  return (
    <img
      src={getImageUrl( mycont.place)}
      alt={ mycont.place.name}
      width={contValue.imageSize}
      height={contValue.imageSize}
    />
  );
};

export default PlaceImage;
