import { StyleSheet } from "react-native";

export const stylesHomeScreen = StyleSheet.create({
    
    // ---------------------- //
    //       BASIC METEO      //
    // ---------------------- //
    containerMeteoBasic:{
        flex :2,
    },

    textBasicMeteo:{
        fontSize:60,
        fontFamily:'Alata-Regular'
    },

    // ---------------------- //
    //       SEARCHBAR        //
    // ---------------------- //
    containerSearchbar:{
        flex:2,
    },

    // ------------------------- //
    //       ADVANCED METEO      //
    // ------------------------- //
    containerMeteoAdvanced:{
        flex: 1,
    },

    // ------------------------- //
    //         SCROLL VIEW       //
    // ------------------------- //
    containerScroll:{
        flex: 1,
    },


});
