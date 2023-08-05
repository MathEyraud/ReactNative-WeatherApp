import { StyleSheet } from "react-native";

export const stylesMeteoBasic = StyleSheet.create({

    containerClock:{
        alignItems:'flex-end',
    },

    labelWeather:{
        alignSelf:'flex-end',
        transform:[{rotate:"-90deg"}],
        fontSize:20,
    },

    containerTemperature:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline',
    },

    labelTemperature:{
        fontSize:150,
    },

    image:{
        height:90,
        width:90,
    },


})