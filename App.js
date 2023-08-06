import { Home } from './screens/Home';
import AlataRegular from './assets/fonts/Alata-Regular.ttf'
import {useFonts} from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from './screens/Forecast';

const stack = createNativeStackNavigator();
const navTheme = {
  colors:{
    background:'transparent'
  }
};

export default function App() {

  const [isFontLoaded] = useFonts({
    "Alata-Regular" : AlataRegular,
  });

  return (

    <NavigationContainer theme={navTheme}>

      {isFontLoaded ? 

        <stack.Navigator
          screenOptions={{
            headerShown:false,
            animation:'fade',
          }}
          initialRouteName='Home'
        >

          <stack.Screen name='Home'     component={Home}/>
          <stack.Screen name='Forecast' component={Forecast} />

        </stack.Navigator>

      : null}

    </NavigationContainer>

  );
  
}