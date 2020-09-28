import React, {useContext} from "react";
import Context from "../Context"
import '../style/WeatherData.css'


//Body of widget
const WeatherData = () => {

    const {weather,city,icon} = useContext(Context)

    const {temp} = weather

    return(
        <div className="d-flex justify-content-center">
            <div className="weather-data">
               <h3 className="weather-data__city">{city}</h3>
                <div className="weather-data__box">
                    <span className="weather-data__property">
                    <h4 className="weather-data__value">{temp}°<i className={icon}></i></h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WeatherData