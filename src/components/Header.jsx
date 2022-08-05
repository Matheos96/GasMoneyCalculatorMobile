import React from 'react'
import { StatusBar, StyleSheet, View, Text } from 'react-native'
import Theme from '../constants/theme'

const Header = ({ title, secondaryText}) => {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={Theme.secondaryColor}/>
            <Text style={styles.headerText}>{ title }</Text>
            { secondaryText && <Text style={styles.byText}>{ secondaryText }</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Theme.secondaryColor,
        alignItems: 'center',
        borderBottomWidth: Theme.borderWidth,
        borderBottomColor: Theme.borderColor,
        padding: 1
    },
    headerText: {
        color: Theme.textColor,
        fontSize: 32,
        fontWeight: "500"
    },
    byText: {
        color: Theme.textColor,
        fontStyle: 'italic'
    }
})

export default Header