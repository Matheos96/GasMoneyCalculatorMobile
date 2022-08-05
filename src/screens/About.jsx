import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Linking } from "react-native"
import Theme from '../constants/theme'
import Header from '../components/Header'
import Pkg from '../../package.json'

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title='About' />
            <Text style={styles.body}>
                Gas Money Calculator is a simple application used to help you calculate each person's share of the gas money for a trip.
                Simply enter all the parameters asked by the calculator, hit calculate and the application will do the rest :){'\n\n'}

                One of the cooler features of the application is that it is able to automatically download yesterday's average fuel prices from the internet.
                However, this feature is only relevant for Finnish users as the downloaded prices are from yesterday's averages in Finland.
                The prices in question are downloaded from <Text style={{fontStyle: 'italic'}}>polttoaine.net</Text>. 
                User's from other countries will have to enter the fuel price manually by unticking the 'Use automatic fuel price' setting.{'\n\n'}

                Found a bug? Improvement suggestions? Don't hesitate to contact me! Contact details can be found on my website. {'\n\n'}

                <Text 
                    style={styles.website} 
                    onPress={() => Linking.openURL('https://matheos96.github.io')}>
                        https://matheos96.github.io
                </Text>
            </Text>

            <View style={styles.versionInfoContainer}>
                <Text style={styles.versionInfoText}>
                    Version: { Pkg.version }
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryColor,
    },
    body: {
        padding: 5,
        marginTop: 10,
        color: Theme.textColor,
        textAlign: 'center',
        fontSize: 15
    },
    website: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    versionInfoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    versionInfoText: {
        fontSize: 15,
        color: Theme.textColor
    }
})

export default About