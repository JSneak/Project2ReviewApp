// import React from 'react';
// import 'react-native-gesture-handler';
// import AppLoading from 'expo-app-loading';
// import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
// import { Navigator } from './routes/drawer'

// export default function App() {

//   let [fontsLoaded] = useFonts({
//     Nunito_400Regular,
// 		Nunito_700Bold,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return <Navigator/>
//   }



// }

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import 'react-native-gesture-handler';
import { Navigator } from './routes/drawer';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
		Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator/>
  }
  
};
