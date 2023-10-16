import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useContext } from "react";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";

export default function Location() {
  const { data } = useContext(ShowPropertyContext);
  // START: Styles
  const containerStyle = {
    width: "100%",
    aspectRatio: "1 / 1",
  };

  const center = {
    lat: data.latitude,
    lng: data.longitude,
  };

  // END: Styles

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17.6}
          options={{
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
          }}
        >
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}
