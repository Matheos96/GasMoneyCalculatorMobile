import React from 'react'
import { StyleSheet, View } from "react-native"
import { StateProvider } from '../StateContext'
import Header from './Header'
import { INPUT_TYPES } from '../StateContext'
import UserInput from './UserInput'
import Result from './Result'
import AutoFuelPrice from './AutoFuelPrice'


const Main = () => {

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <StateProvider>
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
                    <Result />
                </StateProvider>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    body: {
        flex: 1,
        backgroundColor: '#62A8AC',
        alignItems: 'center'
    },
});

export default Main