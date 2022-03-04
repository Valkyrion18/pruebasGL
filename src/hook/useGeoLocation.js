import { useEffect, useState } from 'react';

export const useGeoLocation = () => {

    const [address, setAddress] = useState({
        latitude: '',
        longitude: ''
        // altitude: ''
    })

    const { latitude, longitude } = address

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setAddress({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                // altitude: position.coords.altitude
            })
        })
}, [])

// const getLocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }   
// }

// const getCoordinates = (position) => {
//     setAddress({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         // altitude: position.coords.altitude
//     })
// }

// const handleLocationError = (error) => {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert("User denied the request for Geolocation.")
//             break;
//         case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.")
//             break;
//         case error.TIMEOUT:
//             alert("The request to get user location timed out.")
//             break;
//         case error.UNKNOWN_ERROR:
//             alert("An unknown error occurred.")
//             break;
//         default:
//             break;
//     }
// }

return [latitude, longitude]
}
