import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";

import { stylesHomeScreen } from "./style";
import { MeteoAPI } from "../../api/meteo";
import { TextPrimary } from "../../components/TextPrimary";
import { MeteoBasic } from "../../components/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { CityAPI } from "../../api/city";
import { MeteoAdvanced } from "../../components/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { ContainerApp } from "../../components/ContainerApp";
import { SearchBar } from "../../components/SearchBar";

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
    //             GESTION DE LA NAVIGATION             //
    // ------------------------------------------------ //
    const navigation = useNavigation();
    function navigateToForecastScreen() {
        navigation.navigate("Forecast", {city, ...weather})
    };
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
    // ---------------------------------------------------- //
    // RECUPERATION DE LA VILLE EN FONCTION DES COORDONNEES //
    // ---------------------------------------------------- //
    async function fetchCity(location){

        console.log("\n ----- fetchCity -----",);

        const cityResponse = await CityAPI.fetcCityFromLocation(location);
        setCity(cityResponse);
        
    };
    // ---------------------------------------------------- //
    // RECUPERATION DES COORDONNEES EN FONCTION DE LA VILLE //
    // ---------------------------------------------------- //
    async function fetchLocation(city){

        console.log("\n ----- fetchLocation -----",);

        try{
            const locationResponse = await MeteoAPI.fetcLocationFromCity(city);
            setLocation(locationResponse);

        }catch(error){
            Alert.alert('Oups !', error);
        }
       
        
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
    
        <ContainerApp>

            <View style={stylesHomeScreen.containerMeteoBasic}>

                <MeteoBasic 
                    temperature={Math.round(currentWeather?.temperature)}
                    city={city}
                    interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                    onPress={navigateToForecastScreen}
                />

            </View>


            <View style={stylesHomeScreen.containerSearchbar}>
                <SearchBar
                    onSubmit={fetchLocation}
                />
            </View>


            <View style={stylesHomeScreen.containerMeteoAdvanced}>

                <MeteoAdvanced
                    dusk = {weather?.daily.sunrise[0].split("T")[1]}
                    dawn = {weather?.daily.sunset[0].split("T")[1]}
                    wind = {currentWeather?.windspeed}
                />

            </View>

        </ContainerApp>

    ) : null;
}