import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import {
  Button,
  Containeter,
  Input,
  InputWrapper,
  Sidebar,
  Wrapper,
} from "./style";

const libraries = ["places"];

export const Catalog = () => {
  const [place, setPlace] = useState(null);
  const [center, setCenter] = useState({ lat: 41.2995, lng: 69.2401 });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDqw3adF1rAFs5-n2G1Emu4Z90ce31tOto",
    id: "fast - food",
    libraries,
    center,
  });

  return (
    <Containeter>
      <Sidebar />
      <Wrapper>
        <InputWrapper>
          <Autocomplete>
            <Input />
          </Autocomplete>
          <Button>Search</Button>
        </InputWrapper>
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerStyle={{
            width: "1500px",
            height: "750px",
            border: "5px solid white",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Marker position={{ lat: 41.2995, lng: 69.2401 }} />
        </GoogleMap>
      </Wrapper>
    </Containeter>
  );
};
export default Catalog;
