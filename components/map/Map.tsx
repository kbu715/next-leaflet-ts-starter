import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CarIcon } from "../../vendor";

type MapProps = {
  mapStyle: React.CSSProperties;
};

const Map = ({ mapStyle }: MapProps) => {
  return (
    <MapContainer
      center={[37.56675, 126.97842]}
      zoom={10}
      scrollWheelZoom={true}
      style={mapStyle}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.56675, 126.97842]} icon={CarIcon}>
        <Popup>서울 시청</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
