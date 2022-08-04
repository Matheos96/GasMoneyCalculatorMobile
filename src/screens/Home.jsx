import React from 'react'
import { StyleSheet, View } from "react-native"
import { StateProvider, INPUT_TYPES } from '../StateContext'
import Header from '../components/Header'
import UserInput from '../components/UserInput'
import AutoFuelPrice from '../components/AutoFuelPrice'
import Theme from '../constants/theme'
import { StatusBar, SafeAreaView } from 'react-native'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Theme.secondaryColor}/>
            <Header />
            <StateProvider>
                <View style={styles.body}>
                    
                        <UserInput 
                            label="Distance (km)" 
                            type={INPUT_TYPES.DISTANCE} />

                        <UserInput 
                            label="Fuel Consumption (l/100km)" 
                            type={INPUT_TYPES.CONSUMPTION} />
                        
                        <UserInput 
                            label="Split between (persons)" 
                            type={INPUT_TYPES.PERSONS} />

                        <AutoFuelPrice />

                        <UserInput 
                            label="Manually set fuel price (€/l)" 
                            type={INPUT_TYPES.MANUAL_FUEL} />
                        
                        
                </View>
                <Footer />
            </StateProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryColor,
    },
    body: {
        flex: 7,
        alignItems: 'center'
    }
})

export default Home