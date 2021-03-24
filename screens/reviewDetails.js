import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';


const ReviewDetails = ({ navigation, route }) => {

    const { title, body, rating } = route.params;

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Screen</Text>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    )
}

export default ReviewDetails