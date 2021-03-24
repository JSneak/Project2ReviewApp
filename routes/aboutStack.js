import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator();

export const AboutStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={{ title: 'About' }}/>
    </Stack.Navigator>
);

