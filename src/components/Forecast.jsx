import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forecast = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        // Fetch forecast data from the Flask API
        axios.get('http://localhost:5000/forecast')
            .then(response => {
                setForecast(response.data);
            })
            .catch(error => {
                console.error('Error fetching forecast:', error);
            });
    }, []);

    return (
        <div>
            <h2>Demand Forecast</h2>
            <ul>
                {forecast.map((item, index) => (
                    <li key={index}>{item.ds}: {item.yhat.toFixed(2)} units</li>
                ))}
            </ul>
        </div>
    );
};

export default Forecast;
