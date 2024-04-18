import React, { createContext, useReducer } from 'react';
import { fetchWeatherData } from '../services/WeatherService';

export const WeatherContext = createContext();

const initialState = {
    weatherData: null,
    loading: true,
    error: null,
};

function weatherReducer(state, action) {
    switch (action.type) {
        case 'FETCH_WEATHER_SUCCESS':
            return {
                ...state,
                weatherData: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_WEATHER_FAILURE':
            return {
                ...state,
                weatherData: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const WeatherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer, initialState);

    const fetchWeather = async (city) => {
        try {
            const data = await fetchWeatherData(city);
            console.log('Data:', data); // Verificar los datos devueltos
            dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error });
        }
    };

    return (
        <WeatherContext.Provider value={{ state, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};