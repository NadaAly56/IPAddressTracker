import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import iconUrl from "../../public/images/icon-location.svg";
export default function Map() {
  const address = useSelector((state) => state.ip.address);
  const [center, setCenter] = useState([51.505, -0.09]);
  const icon = L.icon({
    iconUrl,
    iconSize: [30, 35],
  });
  useEffect(() => {
    if (address)
      setCenter((state) => [address.location.lat, address.location.lng]);
  }, [address]);
  return (
    <MapContainer
      className="map"
      center={center}
      zoom={18}
      scrollWheelZoom={true}
    >
      <ChangeCenter center={center}></ChangeCenter>
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {address?.location && (
        <Marker position={center} icon={icon}>
          <Popup className="popup p-3">
            <div className="row">
              <div className="col-6">
                <p className="mb-0 font-weight-bold pe-2">
                  <p className="text-secondary mb-1 title">Loaction</p>
                  {address?.location.country}, {address?.location.city}
                </p>
              </div>
              <div className="col-6">
                <p className="text-secondary mb-1 title px-2">Ip</p>
                <p className="mb-0 font-weight-bold px-2">{address.ip}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
function ChangeCenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
