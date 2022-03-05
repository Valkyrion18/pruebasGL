import '../styles/styles-map.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mostrarProductosAsincrono } from '../redux/actions/actionProducts';
import { MapContainer, TileLayer } from "react-leaflet";
export const GOOGLE_API_KEY = 'AIzaSyCOnA0TkClNxx4R_ZF9O2nEmY7HEjs8Am8';

const ShowMap = () => {

    // const [state, setState] = useState({
    //     currentLocation: { lat: 5.0638835, lng: -75.522555 },
    //     zoom: 13,
    //   });

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mostrarProductosAsincrono())
    }, [dispatch])

    // const { coordinates } = useSelector(store => store.coordinates);

    // console.log(coordinates)

    return (
        <div>
            {/* {
                coordinates.map((coordinate, index) => (
                    <div key={index}>
                        {
                            coordinate.latitud && coordinate.longitud ?
                                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinate.latitud},${coordinate.longitud}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${coordinate.latitud},${coordinate.longitud}&key=${GOOGLE_API_KEY}`} alt="" />
                                :
                                null
                            
                        }

                        <h4>{coordinate.latitud} {coordinate.longitud}</h4>
                    </div>
                ))
            } */}
            <MapContainer center={state.currentLocation} zoom={state.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    className='map-dimmensions'
                />
                {/* <Markers venues={state.data.venues} /> */}
            </MapContainer>
        </div>
    )
}

export default ShowMap