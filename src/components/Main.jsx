import React from 'react'
import { StyleSheet, View } from "react-native"
import { StateProvider } from '../StateContext'
import Header from './Header'
import { INPUT_TYPES } from '../StateContext'
import UserInput from './UserInput'
import Result from './Result'
import AutoFuelPrice from './AutoFuelPrice'
import Theme from '../theme'
import { StatusBar, SafeAreaView } from 'react-native'
import Calculate from './Calculate'
import Footer from './Footer'


const Main = () => {

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
                        
                        <Footer />
                </View>
                
            </StateProvider>
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

export default Main