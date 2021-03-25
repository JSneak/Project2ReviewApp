import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';


const Stack = createStackNavigator();

export const AboutStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} 
        options={{
          headerTitleAlign: "center", 
          headerTitle: () => <Header title='About GameZone' />, 
        }}
      />
    </Stack.Navigator>
);

