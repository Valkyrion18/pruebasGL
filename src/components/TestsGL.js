import { useDispatch } from "react-redux";
// import { useGeoLocation } from "../hook/useGeoLocation";
import { registrarDatosAsincrono } from "../redux/actions/actionProducts";
import { useNavigate } from 'react-router-dom';

const TestsGL = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [latitude, longitude] = useGeoLocation()

    // const { latitude, longitude } = coordinates

    const iniciarRecorrido = () => {
        setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                const datos = {
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            }
                console.log(datos)
                dispatch(registrarDatosAsincrono(datos))
            })
                        
        }, 10000)
    }

    const finalizarRecorrido = () => {
        navigate('/map')
    }

    return (
        <div>
            <button
                onClick={iniciarRecorrido}>Obtener Ubicacion</button>
            <button
                onClick={finalizarRecorrido}>Finalizar</button>
        </div>
    )
}

export default TestsGL