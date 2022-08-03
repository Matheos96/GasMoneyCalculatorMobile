import React from 'react'
import { StyleSheet, View, Text, Switch } from "react-native"
import { Picker } from "@react-native-picker/picker";
import { FUEL_TYPES } from '../StateContext';
import { useStateContext, INPUT_TYPES } from '../StateContext'
import Theme from '../theme'

const AutoFuelPrice = () => {
    const ctx = useStateContext()
    const switchValue = ctx.getValue(INPUT_TYPES.AUTO_FUEL)
    const switchSetter = ctx.getSetter(INPUT_TYPES.AUTO_FUEL)
    const pickerValue = ctx.getValue(INPUT_TYPES.PICKER)
    const pickerSetter = ctx.getSetter(INPUT_TYPES.PICKER)


    return (
        <View style={styles.container}>

            <Text style={styles.inputHeader}>Use automatic fuel price</Text>

            <Switch style={styles.switch}
                value={switchValue}
                onChange={() => switchSetter(!switchValue)} />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={pickerValue}
                    onValueChange={(value, _) => pickerSetter(value)}
                    mode="dropdown" // Android only
                    style={{...styles.dropdown, opacity: !switchValue ? 0.5 : 1}}
                    enabled={switchValue}>
                    <Picker.Item label={FUEL_TYPES.GAS95E10} value={FUEL_TYPES.GAS95E10} />
                    <Picker.Item label={FUEL_TYPES.GAS98E} value={FUEL_TYPES.GAS98E} />
                    <Picker.Item label={FUEL_TYPES.DIESEL} value={FUEL_TYPES.DIESEL} />
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputHeader: {
        fontSize: 20,
        color: Theme.textColor
    },
    switch: {
        transform: [ { scale: 1.3 } ]
    },
    pickerContainer: {
        backgroundColor: Theme.boxColor,
        width: Theme.boxWidth,
        borderWidth: 1,
    },
})

export default AutoFuelPrice