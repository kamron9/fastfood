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

export const Xarita
 = () => {
  const [place, setPlace] = useState(null);
  const [center, setCenter] = useState({ lat: 41.2995, lng: 69.2401 });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDqw3adF1rAFs5-n2G1Emu4Z90ce31tOto",
    id: "fast - food",
    libraries,
    center,
  });
  const onPlaceChanged = () => {
    setCenter({
      lat: place?.getPlace()?.geometry?.location?.lat(),
      lng: place?.getPlace()?.geometry?.location?.lng(),
    });
  };
  return (
    <Containeter>
      <Sidebar />
      <Wrapper>
        <InputWrapper>
          <Autocomplete
            onLoad={(e) => setPlace(e)}
            onPlaceChanged={onPlaceChanged}
          >
            <Input />
          </Autocomplete>
        </InputWrapper>
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerStyle={{
            width: "1500px",
            height: "800px",
            border: "5px solid white",
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </Wrapper>
    </Containeter>
  );
};
export default Xarita
;
