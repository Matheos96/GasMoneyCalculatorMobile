import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Theme from '../constants/theme'
import { RESULT_KEY, useStateContext } from '../StateContext'

const Result = () => {
    const ctx = useStateContext()
    const result = ctx.getValue(RESULT_KEY)

    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>
                   {
                    (result != '') && <>Each person pays { result } €</>
                   }
            </Text>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.secondaryColor,
        borderTopColor: Theme.borderColor,
        borderTopWidth: Theme.borderWidth
    },
    resultText: {
        fontSize: 28,
        color: Theme.textColor
    }
});

export default Result