import React, { useState, useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const Header = () => {
    const [city, setCity] = useState('');
    const { fetchWeather } = useContext(WeatherContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            fetchWeather(city);
        }
        setCity('');
    };

    return (
        <header className="bg-blue-500 p-4 text-black">
            <h1 className="text-2xl font-mono text-white font-bold">Clima App</h1>
            <form onSubmit={handleSubmit} className="mt-4 flex items-center">
                <input
                    type="text"
                    placeholder="Ingrese la ciudad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2 border rounded-l"
                />
                <button type="submit" className="bg-white text-blue-500 p-2 rounded-r">
                    Buscar
                </button>
            </form>
        </header>
    );
};

export default Header;