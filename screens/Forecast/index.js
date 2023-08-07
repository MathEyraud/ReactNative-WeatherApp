import { TouchableOpacity, View } from "react-native";
import { stylesForecastScreen } from "./style";
import { ContainerApp } from "../../components/ContainerApp";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextPrimary } from "../../components/TextPrimary";
import { ForecastListItem } from "../../components/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { DAYS, dateToDDMM } from "../../services/date-service";

export function Forecast({}) {

    // VARIABLES
    const {params} = useRoute();
    const ville = params.city;
    
    //
    //
    //
    //
    //
    // ------------------------------------------------ //
    //             GESTION DE LA NAVIGATION             //
    // ------------------------------------------------ //
    const navigation = useNavigation();
    //
    //
    //
    //
    //
    // ------------------------------------------------ //
    //                 COMPOSANT DU JSX                 //
    // ------------------------------------------------ //
    const backButton = (
        <TouchableOpacity 
            onPress={()=> navigation.goBack()}
            style={stylesForecastScreen.backButton}
        >

            <TextPrimary>{"<"}</TextPrimary>

        </TouchableOpacity>
    );

    const header = (
        <View style={stylesForecastScreen.header} >

            {backButton}

            <View style={stylesForecastScreen.containerTitle}>

                <TextPrimary>{ville}</TextPrimary>

                <TextPrimary style={stylesForecastScreen.labelSubtitle} >
                    Prévision sur 7 jours
                </TextPrimary>    

            </View>

        </View>
    );

    const foreCastList = (
        <View style={stylesForecastScreen.containerForecastListItem}>
            {
                params.daily.time.map((time,index) => {

                    console.log("params :",params);
                    const codeWeather           = params.daily.weathercode[index];
                    const imageWeather          = getWeatherInterpretation(codeWeather).image;
                    const dateWeather           = new Date(params.daily.time[index]);               
                    const dayWeather            = DAYS[dateWeather.getDay()];                       
                    const temperatureWeather    = params.daily.temperature_2m_max[index];
                     
                    return (
                        <ForecastListItem 
                            key={time}
                            image={imageWeather}
                            day={dayWeather}
                            date={dateToDDMM(dateWeather)}
                            temperature={temperatureWeather.toFixed(0)}
                        />
                    )
                })
            }
        </View>
    );
    //
    //
    //
    //
    //
    // ------------------------------- //
    // ---------- AFFICHAGE ---------- //
    // ------------------------------- //
    return (
    
        <ContainerApp>

            {header}                            

            {foreCastList}

        </ContainerApp>

    );
}