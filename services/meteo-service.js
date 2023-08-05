const WEATHER_INTERPRETATIONS = [
    {
        codes : [0],
        image:require("../assets/meteoPicture/sun.png"),
        label:"Ensoleillé",
    },
    {
        codes : [1,2,3,45,48],
        image:require("../assets/meteoPicture/clouds.png"),
        label:"Nuageux",
    },
    {
        codes : [51,53,55,56,57,61,63,65,66,67,80,81,82],
        image:require("../assets/meteoPicture/rain.png"),
        label:"Pluvieux",
    },
    {
        codes : [71,73,75,77,85,86],
        image:require("../assets/meteoPicture/snow.png"),
        label:"Neigeux",
    },
    {
        codes : [95,96,99],
        image:require("../assets/meteoPicture/thunder.png"),
        label:"Orageux",
    },
]

export function getWeatherInterpretation(code){
    return WEATHER_INTERPRETATIONS.find(
        (interpretation) => interpretation.codes.includes(code)
    );
}