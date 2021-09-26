import React, { useState } from 'react'
import { Keyboard, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useStateContext, INPUT_TYPES } from '../StateContext'
import { getAveragePrice } from '../services/fuelPriceService'

const Result = () => {
    const ctx = useStateContext()

    const distance = ctx.getValue(INPUT_TYPES.DISTANCE)
    const consumption = ctx.getValue(INPUT_TYPES.CONSUMPTION)
    const persons = ctx.getValue(INPUT_TYPES.PERSONS)
    const price = ctx.getValue(INPUT_TYPES.MANUAL_FUEL)
    const fuelType = ctx.getValue(INPUT_TYPES.PICKER)
    const useAutoFuel = ctx.getValue(INPUT_TYPES.AUTO_FUEL)

    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState('')

    const onCalculate = async () => {
        const fuelPrice = useAutoFuel ? await getAveragePrice(fuelType) : price
        let res = Math.round((((distance / 100.0) * consumption * fuelPrice) / persons) * 100.0) / 100.0
        if (!isNaN(res)) {
            setResult(res)
            setShowResult(true)
        }
        Keyboard.dismiss()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={onCalculate}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.resultContainer}>
                {
                    showResult && 
                    <Text style={styles.resultText}>
                        Each person pays { result } €
                    </Text>
                }
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '16.6%',
        width: '100%',
        justifyContent: 'space-between',
    },
    btnContainer: {
        width: '60%'
    },
    button: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#A1D2CE',
        paddingVertical: 14,
    },
    buttonText: {
        color: '#FFF5EE',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
    resultContainer: {
        backgroundColor: '#A1D2CE',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderTopColor: "#50858B"
    },
    resultText: {
        fontSize: 28,
        color: '#FFF5EE'
    }
});

export default Result