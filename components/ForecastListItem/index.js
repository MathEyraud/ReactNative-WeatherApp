import { View, Image } from "react-native";
import { stylesForecastListItem } from "./style";
import { TextPrimary } from "../TextPrimary";

export function ForecastListItem({image, day, date, temperature}){

    return (

        <View style={stylesForecastListItem.container}>

            <Image style={stylesForecastListItem.image} source={image}/>

            <TextPrimary style={stylesForecastListItem.labelDay}>{day}</TextPrimary>

            <TextPrimary style={stylesForecastListItem.labelDate}>{date}</TextPrimary>

            <TextPrimary style={stylesForecastListItem.labelTemperature}>{temperature}°</TextPrimary>

        </View>
    )
}