import { useDispatch } from "react-redux";
// import { useGeoLocation } from "../hook/useGeoLocation";
import { registrarDatosAsincrono } from "../redux/actions/actionProducts";
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

const TestsGL = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const reference = useRef()

    // const [latitude, longitude] = useGeoLocation()

    // const { latitude, longitude } = coordinates

    const iniciarRecorrido = () => {
        const id = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position)
                const datos = {
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            }
                console.log(datos)
                dispatch(registrarDatosAsincrono(datos))
            })
            if(reference.current.autofocus === true){
                clearInterval(id)
                reference.current.autofocus = false;
            }
                        
        }, 10000)
    }

    const finalizarRecorrido = () => {
        reference.current.autofocus = true;
        navigate('/map')
    }

    return (
        <div>
            <button
                onClick={iniciarRecorrido}>Obtener Ubicacion</button>
            <button
                ref={reference}
                onClick={finalizarRecorrido}>Finalizar</button>
        </div>
    )
}

export default TestsGL