import { stylesContainerApp } from "./style";
import { ImageBackground } from 'react-native';
import backgroundImage from '../../assets/background.jpg'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';




export function ContainerApp({children}){


    return (
        

            <ImageBackground 
                source={backgroundImage} 
                style={stylesContainerApp.containerBackground} 
                imageStyle={stylesContainerApp.image}
                resizeMethod='resize'
            >

                <SafeAreaProvider>

                    <SafeAreaView style={stylesContainerApp.container}>

                    {children}

                    </SafeAreaView>

                </SafeAreaProvider>

            </ImageBackground> 

    )
}