import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { Containeter, Wrapper } from "./style";

export const Catalog = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDqw3adF1rAFs5-n2G1Emu4Z90ce31tOto",
    id: "fast - food",
    // libraries,
  });

  return (
    <Containeter>
      <Wrapper />
      <Autocomplete>
        <input type="text" />
      </Autocomplete>
      <GoogleMap
        zoom={13}
        center={{ lat: 41.2995, lng: 69.2401 }}
        mapContainerStyle={{
          width: "1500px",
          height: "800px",
          border: "5px solid white",
          marginLeft: "50px",
          marginTop: "50px",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Marker position={{ lat: 41.2995, lng: 69.2401 }} />
      </GoogleMap>
    </Containeter>
  );
};
export default Catalog;
