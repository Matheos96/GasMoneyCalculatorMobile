import React from 'react'
import { StyleSheet, View, Text, TextInput } from "react-native"
import { useStateContext, INPUT_TYPES, CALCULATE_STATUS_KEY } from '../StateContext'
import Theme from '../constants/theme'

const UserInput = ({ label, type }) => {
    const ctx = useStateContext()
    const value = ctx.getValue(type)
    const onchange = ctx.getSetter(type)
    const editable = !(type == INPUT_TYPES.MANUAL_FUEL && ctx.getValue(INPUT_TYPES.AUTO_FUEL))
    const calculateStatus = ctx.getValue(CALCULATE_STATUS_KEY)
    
    const styles = StyleSheet.create({
        inputContainer: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        textInput: {
            backgroundColor: value == '' && calculateStatus && editable ? Theme.boxInvalidColor : Theme.boxColor,
            width: Theme.boxWidth,
            borderWidth: 1,
            height: 50,
            padding: 10,
            fontSize: 17
        },
        inputHeader: {
            fontSize: 20,
            color: Theme.textColor
        }
    })

    return (
        <View style={styles.inputContainer}>

            <Text style={styles.inputHeader}>{ label }</Text>

            <TextInput style={{...styles.textInput, opacity: !editable ? 0.5: 1}} 
                value={value}
                editable={editable}
                onChangeText={val => onchange(val.replace(',', '.'))}
                keyboardType={'numeric'} />
        </View>
    )
}

export default UserInput