import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { CALCULATE_STATUS_KEY, useStateContext } from '../StateContext'
import Theme from '../constants/theme'

const IncrementDecrement = ({ type, label }) => {
    const ctx = useStateContext()
    const value = ctx.getValue(type)
    const setValue = ctx.getSetter(type)
    const calculateStatus = ctx.getValue(CALCULATE_STATUS_KEY)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center'
        },
        inputContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: Theme.boxWidth
        },
        inputHeader: {
            fontSize: 20,
            color: Theme.textColor
        },
        inputBox: {
            borderWidth: 1,
            color: 'black',
            height: 50,
            padding: 10,
            fontSize: 17,
            backgroundColor: (value == '' || parseInt(value) <= 0) && calculateStatus ? Theme.boxInvalidColor : Theme.boxColor,
            width: '50%'
        },
        buttonContainer: {
            width: '23%'
        },
        button: {
            borderRadius: 5,
            paddingHorizontal:8,
            paddingVertical: 8,
            backgroundColor: Theme.secondaryColor,
            width: '100%',
            height: 50
        },
        buttonText: {
            color: Theme.textColor,
            textAlign: 'center',
            fontSize: 20
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.inputHeader}>{ label }</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={value}
                    editable={false}
                    keyboardType={'numeric'} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setValue(`${parseInt(value) - 1}`)}>
                    <View style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setValue(`${parseInt(value) + 1}`)}>
                    <View style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default IncrementDecrement