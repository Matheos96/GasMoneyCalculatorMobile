import React from 'react'
import { StyleSheet, View, Text } from "react-native"
import Theme from '../constants/theme'
import { StatusBar, SafeAreaView } from 'react-native'

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Theme.secondaryColor}/>
            <View style={styles.body}>
                <Text>Test</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 7,
        backgroundColor: Theme.primaryColor,
        alignItems: 'center'
    }
})

export default About