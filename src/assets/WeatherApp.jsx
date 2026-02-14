import SearchBox from "./SearchBox"
import InfoBox  from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
             city: "Delhi",
        feelslike:16.46,
        temp:17.05,
        tempMax:17.05,
        tempMin:17.05,
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Rudra</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo} />
        </div>
    )
}