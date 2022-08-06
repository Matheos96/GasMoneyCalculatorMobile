import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useStateContext } from '../StateContext'
import Theme from '../constants/theme'

const ResetButton = () => {
    const ctx = useStateContext()

    const onReset = () => ctx.resetAll()

    return (
        <TouchableOpacity style={styles.container} onPress={onReset}>
                <View style={styles.button}>
                    <Text style={Theme.buttonText}>Reset</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
    button: {
        ...Theme.button,
        backgroundColor: Theme.resetButtonColor,
        paddingVertical: 5
    }
})

export default ResetButton