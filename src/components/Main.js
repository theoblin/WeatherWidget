import React,{useState} from "react";
import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Context from "../Context";
import Error from "./Error";
import axios from "axios"
import '../style/Main.css'


const Main = () =>{

    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const [icon, setIcon] = useState()
    const [error, setError] = useState()

    //Display de right icon
    function findIcon(param) {

        switch (param) {

            case 'Clouds':
                setIcon("fas fa-cloud")
                break;
            case 'Rain':
                setIcon("fas fa-cloud-rain")
                break;
            case 'Clear':
                setIcon("fas fa-sun")
                break;
            case 'Mist':
                setIcon("fas fa-smog")
                break;
            default :
                setIcon("fas fa-cloud")
        }
    }

    const api_call = async (e) => {

        e.preventDefault()
        const location = e.target.elements.location.value

        if(!location){
            setWeather(null)
            return setError("Please enter the name of the city")
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}` //API KEY in .env
        // If everything OK
        try{
            const request = axios.get(url)
            const response = await request
            setWeather(response.data.main)
            setCity(response.data.name)
            findIcon(response.data.weather[0].main)
            setError(null)
        }
        //errors section
        catch(err){
            setWeather(null)
            setError(err.response.data.message);
        }
    }

    return (

        <div className="  main">
            <Header></Header>
            <Content className="card">
                <Context.Provider value={{api_call, weather,city,icon}} >
                    <WeatherSearch />
                    { weather && <WeatherData  />}
                    { error && <Error error={error}/>}
                </Context.Provider>
            </Content>
        </div>
    )
}

export default Main