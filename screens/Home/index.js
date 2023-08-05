import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";

import { stylesHomeScreen } from "./style";
import { MeteoAPI } from "../../api/meteo";
import { TextPrimary } from "../../components/TextPrimary";
import { MeteoBasic } from "../../components/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { CityAPI } from "../../api/city";

export function Home({}) {

    // VARIABLES
    const [location, setLocation]   = useState();
    const [weather, setWeather]     = useState(); 
    const [city,setCity]            = useState();
    const currentWeather            = weather?.current_weather //current_weather : Variable de l'API open-meteo
    //
    //
    //
    //
    //
    // ------------------------------------------------ //
    //             A L'OUVERTURE DE LA PAGE             //
    // ------------------------------------------------ //
    useEffect(() => {
        getUserLocation();
    },[]);
    //
    //
    //
    //
    //
    useEffect(() => {

        if(location){
            fetchWeather(location)
            fetchCity(location)
        }
        
    },[location]);
    //
    //
    //
    //
    //
    // ------------------------------------------------ //
    // RECUPERATION DE LA LOCALISATION DE L'UTILISATEUR //
    // ------------------------------------------------ //
    async function getUserLocation(){

        console.log("\n ----- getUserLocation -----",);

        let {status} = await requestForegroundPermissionsAsync();

        if(status==='granted'){

            const location = await getCurrentPositionAsync();

            setLocation({
                latitude : location.coords.latitude,
                longitude : location.coords.longitude,
            })

        } else {
            
            //PARIS : DEFAULT
            setLocation({latitude : '48.85', longitude:'2.35'})
        }
    };
    //
    //
    //
    //
    //
    // ------------------------------------------------ //
    //     RECUPERATION DES INFORMATIONS DE LA METEO    //
    // ------------------------------------------------ //
    async function fetchWeather(location){

        console.log("\n ----- fetchWeather -----",);

        const weatherResponse = await MeteoAPI.fetcWeatherFromLocation(location);
        setWeather(weatherResponse);

    };
    //
    //
    //
    //
    //
    // ------------------------------------------------ //
    //     RECUPERATION DES INFORMATIONS DE LA VILLE    //
    // ------------------------------------------------ //
    async function fetchCity(location){

        console.log("\n ----- fetchCity -----",);

        const cityResponse = await CityAPI.fetcCityFromLocation(location);
        setCity(cityResponse);
        
    };
    //
    //
    //
    //
    //
    // ------------------------------- //
    // ---------- AFFICHAGE ---------- //
    // ------------------------------- //
    // currentWeather ? : Cela évite d'avoie l'actualisation au début et d'avoir un flash bizarre.
    return currentWeather ? (
    
        <>
            <View style={stylesHomeScreen.containerMeteoBasic}>

                <MeteoBasic 
                    temperature={Math.round(currentWeather?.temperature)}
                    city={city}
                    interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                />

            </View>


            <View style={stylesHomeScreen.containerSearchbar}>

            </View>


            <View style={stylesHomeScreen.containerMeteoAdvanced}>
            
            </View>
        </>

    ) : null;
}