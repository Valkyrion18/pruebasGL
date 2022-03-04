import React from 'react'
import { useSelector } from 'react-redux';

const ShowMap = () => {

    const { coordinates } = useSelector(store => store.coordinate);

    console.log(coordinates)

    return (
        <div>
            ShowMap
        </div>
    )
}

export default ShowMap