import React, {useContext} from "react";
import Context from "../Context"
import '../style/Search.css'

const WeatherSearch = () => {

    const {api_call} = useContext(Context)
    return (

        <div className="weather-search">
            <form onSubmit={api_call} className="  weather-search__form">
                <input name="location" autoComplete="off" className=" form-control weather-search__input" type="text"/>
            </form>
        </div>
    )
}

export default WeatherSearch
