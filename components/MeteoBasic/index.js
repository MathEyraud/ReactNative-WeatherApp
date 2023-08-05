import { View, Image } from "react-native";
import { TextPrimary } from "../TextPrimary";
import { stylesMeteoBasic } from "./style";
import { Clock } from "../clock";

export function MeteoBasic({temperature,city,interpretation}) {
    
    return (
        <>

            <View style={stylesMeteoBasic.containerClock}>

                <Clock/>

            </View>


            <TextPrimary>{city}</TextPrimary>


            <TextPrimary style={stylesMeteoBasic.labelWeather}>{interpretation.label}</TextPrimary>


            <View style={stylesMeteoBasic.containerTemperature}>

                <TextPrimary style={stylesMeteoBasic.labelTemperature}>{temperature}°</TextPrimary>

                <Image style={stylesMeteoBasic.image} source={interpretation.image}/>

            </View>

        </>

    )
}