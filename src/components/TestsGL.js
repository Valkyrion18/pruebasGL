import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGeoLocation } from "../hook/useGeoLocation";
import { registrarDatosAsincrono } from "../redux/actions/actionProducts";
import { useNavigate } from 'react-router-dom';

const TestsGL = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [latitude, longitude, getLocation] = useGeoLocation()

    // const { latitude, longitude } = coordinates

    useEffect(() => {
        // getLocation()
    }, [])

    const iniciarRecorrido = () => {
        setInterval(() => {
            getLocation()
            console.log(latitude, longitude)
            const datos = {
                latitud: latitude,
                longitud: longitude
            }
            dispatch(registrarDatosAsincrono(datos))
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