import React, {useState} from 'react';
import Form from "./formControled";
import Weather from "./Weather";
import {BASE_URL, API_key} from "../utils/constans"


const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState("Enter city name");

    const getWeather = async (city) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_key}&units=metric`);
            if (!response.ok) {
                throw new Error(response.status)
            }
            const data = await response.json();
            setWeatherInfo({
                country: data.sys.country,
                city: data.name,
                pressure: data.main.pressure,
                temp: data.main.temp,
                sunset: data.sys.sunset
            });
            setMessage(null);
        } catch (e) {
            console.log(e.message);
            setMessage("Enter corrected city")
        }
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather info={weatherInfo} message={message}/>
        </div>
    );
}

export default Data;