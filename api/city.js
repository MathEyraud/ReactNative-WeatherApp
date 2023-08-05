import axios from "axios";

export class CityAPI{

    static async fetcCityFromLocation(location){

        console.log("----- fetcCityFromLocation -----",);

        const response =  await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`);

        const city      = response.data.address.city    !== undefined ? response.data.address.city      : null;
        const village   = response.data.address.village !== undefined ? response.data.address.village   : null;
            
        return city || village;
    }
}