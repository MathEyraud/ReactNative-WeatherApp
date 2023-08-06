import { TextInput } from "react-native";
import { stylesSearchBar } from "./style";

export function SearchBar({onSubmit}){
    return (
        <TextInput
            style={stylesSearchBar.containerInput}
            onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
            placeholder="Recherche une ville..."

        />
    )
}