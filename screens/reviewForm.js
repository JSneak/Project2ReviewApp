import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik'

export default function ReviewForm() {

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values) => (
                    console.log(values)
                )}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            multiline 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                        />

                        <Button title='submit' color='maroon' onPress={ formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}