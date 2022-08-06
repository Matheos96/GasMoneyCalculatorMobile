import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from "react-native"
import { StateProvider, INPUT_TYPES } from '../StateContext'
import Header from '../components/Header'
import UserInput from '../components/UserInput'
import AutoFuelPrice from '../components/AutoFuelPrice'
import Theme from '../constants/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Result from '../components/Result'
import Calculate from '../components/CalculateButton'
import ResetButton from '../components/ResetButton'


const Home = () => {
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <Header title='Gas Money Calculator' secondaryText='By Matheos Mattsson' />
            <StateProvider>
                <KeyboardAwareScrollView contentContainerStyle={styles.body} resetScrollToCoords={{x: 0, y: 0}}> 
                        <UserInput 
                            label='Distance (km)' 
                            type={INPUT_TYPES.DISTANCE} />

                        <UserInput 
                            label='Fuel Consumption (l/100km)' 
                            type={INPUT_TYPES.CONSUMPTION} />
                        
                        <UserInput 
                            label='Split between (persons)' 
                            type={INPUT_TYPES.PERSONS} />

                        <AutoFuelPrice />

                        <UserInput 
                            label='Manually set fuel price (€/l)' 
                            type={INPUT_TYPES.MANUAL_FUEL} />
                        
                        <Calculate setShowResult={setShowResult} setResult={setResult} />
                        <ResetButton />
                </KeyboardAwareScrollView>
                <Result showResult={showResult} result={result} />
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
        flexGrow: 7,
        alignItems: 'center'
    }
})

export default Home