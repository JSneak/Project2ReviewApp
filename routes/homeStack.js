import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';

// const Stack = createStackNavigator();

// export const HomeStack = () => (
//   <NavigationContainer independent={true}>     
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} options={{
//           title: 'GameZone',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           }}} 
//         />
//         <Stack.Screen name="Details" component={ReviewDetails} options={{ title: 'Review Details' }}/>
//     </Stack.Navigator>
//   </NavigationContainer>
// );

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export const HomeStack = () => (

   <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{
        title: 'My home',
        headerStyle: {
          backgroundColor: 'maroon',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name="Details" component={ReviewDetails}
      options={{
        title: 'Review Details',
        headerStyle: {
          backgroundColor: 'navy',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
  </Stack.Navigator>
);