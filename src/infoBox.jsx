import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    const INIT_IMG = "https://media.istockphoto.com/id/57423616/photo/woman-walking-through-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=IM6k3wuDTDSbRzDXZwdB0Z6F7p44c0aHLyqiA1XPh5k=";

    const COLD_IMG = "https://imgs.search.brave.com/ibWyJoN6rnygy4gFE1pcN5QfsK5bQVQJgwcTirk0QLo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/NDA4MzU5MC9waG90/by93aW50ZXItc2Nl/bmUtc25vd2ZhbGwt/aW4tdGhlLXdvb2Rz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1rZDZuajBxWlhX/ZWh4SktES0lFS2dy/a2M0amFHR2dvbFJz/X1JlV2Z0SnlFPQ";
    const HOT_IMG = "https://imgs.search.brave.com/awxRzFT_iKnYuALp19rDqfmlsFj5oW7ZgiDS7WYtqjo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NjM2Nzg3OC9waG90/by9ibHVlLXNreS13/aXRoLXN1bi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Zkdo/S00yS0tmOTJoVjFL/QkR5Znd6VGRuaGNS/UFVBaFJRTC1YY1ZQ/MXZGVT0";
    const RAIN_IMG = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="info-box">
            <h2>Weather Info</h2>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={(info.humidity > 80) ? RAIN_IMG : (info.temp > 15) ? HOT_IMG : COLD_IMG}
                        title="weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {(info.humidity > 80) ? <ThunderstormIcon/> : (info.temp > 15) ? <SunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature: {info.temp}&deg;C </p>
                            <p>Min Temp: {info.tempMin}&deg;C </p>
                            <p>Max Temp: {info.tempMax}&deg;C </p>
                            <p>Humidity: {info.humidity} </p>
                            <p>The weather can be described as <b> {info.weather} </b> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}