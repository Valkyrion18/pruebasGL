import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mostrarProductosAsincrono } from '../redux/actions/actionProducts';

const ShowMap = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mostrarProductosAsincrono())
    }, [dispatch])

    const { coordinates } = useSelector(store => store.coordinates);

    console.log(coordinates)

    return (
        <div>
            ShowMap
        </div>
    )
}

export default ShowMap