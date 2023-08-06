import axios from "axios";

export class MeteoAPI{

    static async fetcWeatherFromLocation(location){

        console.log("----- fetcWeatherFromLocation -----",);

        return (

            (await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&_hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility&daily=weathercode,temperature_2m_max,sunrise,sunset,uv_index_max&timezone=auto&current_weather=true`
            )).data

        )        
    }

    static async fetcLocationFromCity(city){

        console.log("----- fetcLocationFromCity -----",);

        try{

            const response = (await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fr&format=json`)).data.results[0];
            const latitude = response.latitude;
            const longitude = response.longitude;

            return {latitude , longitude}

        }catch(error){
            throw 'Pas de coordonnées trouvées pour la recherche : ' + city;
        }
        
        
        
    }
}