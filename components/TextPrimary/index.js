import { Text, useWindowDimensions } from "react-native";
import { stylesTextPrimary } from "./style";

export function TextPrimary({children, style}){

    const {height} = useWindowDimensions();
    const fontSize = style?.fontSize || stylesTextPrimary.text.fontSize

    return (
        <Text style={[stylesTextPrimary.text, style, {fontSize: fontSize * 0.00118 * height}]}>
            {children}
        </Text>
    )
};