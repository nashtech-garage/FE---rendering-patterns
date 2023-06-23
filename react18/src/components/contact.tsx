import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Contact() {
    return (<section className="w-full my-4">
        <h2 className="my-2">CONTACT US</h2>
        <div style={{ height: '400px', width: '100%' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{height: "100%"}} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    </section>)
}