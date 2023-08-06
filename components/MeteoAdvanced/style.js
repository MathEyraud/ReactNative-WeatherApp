import { StyleSheet } from "react-native";

export const stylesMeteoAdvanced = StyleSheet.create({

    containerPrimary:{
        flexDirection : 'row',
        width:'100%',
        flex :1, 
        justifyContent:'space-between',
        alignItems:'center',

        backgroundColor:'#00000020',
        borderRadius:20,
        paddingHorizontal:20,

        borderWidth:1,
        borderColor:'white',

        gap:10,

    },

    containerValue:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    labelTitle:{
        fontSize:20,
    },


})