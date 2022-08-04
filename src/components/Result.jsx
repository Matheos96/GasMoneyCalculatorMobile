import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Theme from '../constants/theme'

const Result = ({ showResult, result }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>
                   {
                    showResult && <>Each person pays { result } €</>
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