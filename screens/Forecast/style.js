import { StyleSheet } from "react-native";

export const stylesForecastScreen = StyleSheet.create({
    
    header:{
        flexDirection:'row',
    },

    containerTitle :{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:30,
    },

    labelSubtitle:{
        fontSize:20,
    },

    backButton:{
        justifyContent:'center',
        alignItems:'center',
        width:30,
    },

    containerForecastListItem:{
        flex:1,
        padding:20,
    },

});
