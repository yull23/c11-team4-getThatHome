import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -12.010605,
  lng: -76.858894,
};

export default function Locator() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  return (
    <>
      <div>Location</div>
      <p>{import.meta.env.VITE_GOOGLE_MAP_API_KEY}</p>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
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
