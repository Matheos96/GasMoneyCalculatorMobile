import React from 'react'
import { Keyboard, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useStateContext, INPUT_TYPES, CALCULATE_STATUS_KEY, RESULT_KEY } from '../StateContext'
import { getAveragePrice } from '../services/fuelPriceService'
import Theme from '../constants/theme'

const Calculate = () => {
    const ctx = useStateContext()

    const distance = ctx.getValue(INPUT_TYPES.DISTANCE)
    const consumption = ctx.getValue(INPUT_TYPES.CONSUMPTION)
    const persons = ctx.getValue(INPUT_TYPES.PERSONS)
    const price = ctx.getValue(INPUT_TYPES.MANUAL_FUEL)
    const fuelType = ctx.getValue(INPUT_TYPES.PICKER)
    const useAutoFuel = ctx.getValue(INPUT_TYPES.AUTO_FUEL)
    const setResult = ctx.getSetter(RESULT_KEY)
    const setCalculateStatus = ctx.getSetter(CALCULATE_STATUS_KEY)

    const onCalculate = async () => {
        const fuelPrice = useAutoFuel ? await getAveragePrice(fuelType) : price
        const res = Math.round((((distance / 100.0) * consumption * fuelPrice) / persons) * 100.0) / 100.0
        if (!isNaN(res)) {
            setResult(res)
        }
        Keyboard.dismiss()
        setCalculateStatus(true)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onCalculate}>
            <View style={styles.button}>
                <Text style={Theme.buttonText}>Calculate</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        ...Theme.button,
        backgroundColor: Theme.calcButtonColor
    },
})

export default Calculate