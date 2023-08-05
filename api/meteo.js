import axios from "axios";

export class MeteoAPI{

    static async fetcWeatherFromLocation(location){

        console.log("----- fetcWeatherFromLocation -----",);

        return (

            (await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&_hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth&daily=sunrise,sunset,uv_index_max&timezone=auto&current_weather=true`
            )).data

        )        
    }
}