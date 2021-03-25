import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import React from 'react';

const Stack = createStackNavigator();

export const HomeStack = () => (

   <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{
        headerTitle: () => <Header title='GameZone' />,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: "center",
      }}/>
      <Stack.Screen name="Details" component={ReviewDetails}
      options={{
        title: 'Review Details',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: "center",
      }}/>
  </Stack.Navigator>
);