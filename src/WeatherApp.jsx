import {useState} from "react";
import "./WeatherApp.css"
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Delhi', 
        temp: 31.5, 
        tempMax: 31.5, 
        tempMin: 31.5, 
        humidity: 51,
        feelsLike: 33.69,
        weather: 'scattered clouds',
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return(
        <div className="AppContainer">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}