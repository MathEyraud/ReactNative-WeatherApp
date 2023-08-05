import { Text } from "react-native";
import { stylesTextPrimary } from "./style";

export function TextPrimary({children, style}){
    return (
        <Text style={[stylesTextPrimary.text, style]}>
            {children}
        </Text>
    )
};