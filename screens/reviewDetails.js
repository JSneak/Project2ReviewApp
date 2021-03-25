import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import { useNavigation } from '@react-navigation/native';

const ReviewDetails = ({ route }) => {

    const navigation = useNavigation();
    const { title, body, rating } = route.params;

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GamzeZone rating: </Text>
                    <View style={styles.ratingHearts}>
                        {
                            Array(rating).fill().map(
                                () => <Image source={require('../assets/rating-1.png')} />
                            )
                        }
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    ratingHearts:{
        flexDirection: 'row'
    }
})

export default ReviewDetails