import { useState } from "react";
import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e5c7c48860a99ce7875ea26ad2bf34d7";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    };

    let handleChange = (evt) => {
        setError(false);
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };

    return(
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p className="hide" style={{color: "red", fontWeight: 700}}>No info for such place!</p>}
        </div>
    );
}