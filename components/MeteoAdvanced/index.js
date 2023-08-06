import { View, Image } from "react-native";
import { TextPrimary } from "../TextPrimary";
import { stylesMeteoAdvanced } from "./style";

export function MeteoAdvanced({dusk, dawn, wind}) {
    
    return (
        <View style={stylesMeteoAdvanced.containerPrimary}>

            <View style={stylesMeteoAdvanced.containerValue}>

                <TextPrimary>{dusk}</TextPrimary>
                <TextPrimary style={stylesMeteoAdvanced.labelTitle}>Aube</TextPrimary>

            </View>

            <View style={stylesMeteoAdvanced.containerValue}>

                <TextPrimary>{dawn}</TextPrimary>
                <TextPrimary style={stylesMeteoAdvanced.labelTitle}>Crépuscule</TextPrimary>

            </View>

            <View style={stylesMeteoAdvanced.containerValue}>

                <TextPrimary>{wind} km/h</TextPrimary>
                <TextPrimary style={stylesMeteoAdvanced.labelTitle}>Vent</TextPrimary>

            </View>

        </View>
    )
}