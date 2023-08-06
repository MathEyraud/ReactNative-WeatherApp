import { View, Image, TouchableOpacity } from "react-native";
import { TextPrimary } from "../TextPrimary";
import { stylesMeteoBasic } from "./style";
import { Clock } from "../Clock";

export function MeteoBasic({temperature,city,interpretation,onPress}) {
    
    return (
        <>

            <View style={stylesMeteoBasic.containerClock}>

                <Clock/>

            </View>


            <TextPrimary>{city}</TextPrimary>


            <TextPrimary style={stylesMeteoBasic.labelWeather}>{interpretation.label}</TextPrimary>


            <View style={stylesMeteoBasic.containerTemperature}>

                <TouchableOpacity onPress={onPress}>
                
                    <TextPrimary style={stylesMeteoBasic.labelTemperature}>{temperature}°</TextPrimary>

                </TouchableOpacity>

                <Image style={stylesMeteoBasic.image} source={interpretation.image}/>

            </View>

        </>

    )
}