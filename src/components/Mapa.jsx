import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const containerStyle = {
    width: "1000px",
    height: "1000px",
  };

  const center = {
    lat: -39.81422,
    lng: -73.24589,
  };
  const [cnter, setCenter] = React.useState(center);

  const [markers, setMarkers] = React.useState([]);
  const handleMapclick = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setCenter({ lat, lng });
    setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
  }

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={cnter} zoom={12} onClick={handleMapclick}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;


