import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherCard = () => {
    const { state } = useContext(WeatherContext);
    const { weatherData, loading, error } = state;

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!weatherData) {
        return null;
    }

    const { location, current } = weatherData;

    return (
        <div className="border p-4 my-4">
            <h2 className="text-xl">{location.name}, {location.country}</h2>
            <p>Temperatura: {current.temp_c}°C</p>
            <p>Descripción: {current.condition.text}</p>
        </div>
    );
};

export default WeatherCard;