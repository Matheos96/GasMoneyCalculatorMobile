import React from 'react'
import { StyleSheet, View, Text, TextInput } from "react-native"
import { useStateContext, INPUT_TYPES } from '../StateContext'

const UserInput = ({ label, type }) => {
    const ctx = useStateContext()
    const value = ctx.getValue(type)
    const onchange = ctx.getSetter(type)
    const editable = !(type == INPUT_TYPES.MANUAL_FUEL && ctx.getValue(INPUT_TYPES.AUTO_FUEL))


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

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: '16.6%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textInput: {
        width: '60%',
        borderWidth: 1,
        height: 50,
        padding: 10,
        backgroundColor: 'white'
    },
    inputHeader: {
        fontSize: 20,
        color: '#FFF5EE'
    }
});

export default UserInput