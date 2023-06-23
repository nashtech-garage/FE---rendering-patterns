"use client"
import React from 'react';
import 'leaflet/dist/leaflet.css';

let MapContainer = ({center, zoom, scrollWheelZoom, children, style}:{center:any, zoom:any, scrollWheelZoom:any, children:any, style:any}) => (<></>);
let TileLayer = ({attribution, url}:{attribution:any, url:any}) => (<></>);
let Marker = ({position, children}:{position:any, children:any}) => (<></>);
let Popup = ({children}:{children:any}) => (<></>);
let RL = {MapContainer, TileLayer, Marker, Popup};
if (typeof window !== 'undefined') {
  RL = require('react-leaflet');
  MapContainer = RL.MapContainer;
  TileLayer = RL.TileLayer;
  Marker = RL.Marker;
  Popup = RL.Popup;
}

export default function Contact() {
    return (<section className="w-full my-4">
        <h2 className="my-2">CONTACT US</h2>
        <div style={{ height: '400px', width: '100%' }}>
        {typeof window !== 'undefined' && <MapContainer center={[51.505, -0.09]} zoom={13} style={{height: "100%"}} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>}
        </div>
    </section>)
}