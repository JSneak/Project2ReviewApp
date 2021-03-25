import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'


const ReviewDetails = ({ navigation, route }) => {

    const { title, body, rating } = route.params;

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Text>{rating}</Text>
            </Card>
        </View>
    )
}

export default ReviewDetails