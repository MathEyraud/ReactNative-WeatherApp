import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './screens/Home';
import { stylesApp } from './App.style';
import { ImageBackground } from 'react-native';
import backgroundImage from './assets/background.jpg'
import AlataRegular from './assets/fonts/Alata-Regular.ttf'
import {useFonts} from 'expo-font'


export default function App() {

  const [isFontLoaded] = useFonts({
    "Alata-Regular" : AlataRegular,
  });

  return (

    <ImageBackground 
      source={backgroundImage} 
      style={stylesApp.containerBackground} 
      imageStyle={stylesApp.image}
      resizeMethod='resize'>

      <SafeAreaProvider>

        <SafeAreaView style={stylesApp.container}>

          {isFontLoaded ? <Home/> : null}

        </SafeAreaView>

      </SafeAreaProvider>

    </ImageBackground>
  );
  
}