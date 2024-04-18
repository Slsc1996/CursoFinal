import React from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './components/WeatherContext';

export const Principal = () => {
    return (
        <WeatherProvider>
            <div className="container mx-auto p-4">
                <Header />
                <WeatherCard />
            </div>
        </WeatherProvider>
    );
};