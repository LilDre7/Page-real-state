import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

let iconUbicacion = new L.Icon({
  iconUrl: icon,
  iconShadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const map = () => {
  return (
    <section>
      <MapContainer
        center={[10.5525597, -85.6896077]}
        zoom={24}
        scrollWheelZoom={false}
        className="mapa"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[10.5525597, -85.6896077]} icon={iconUbicacion}>
          <Popup>
            Condimiun Sead bird <br /> Welcome!
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default map;
