import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Theme from '../theme'
const Header = () => {
    return (
        <View style={styles.header}>
                <Text style={styles.headerText}>Gas Money Calculator</Text>
                <Text style={styles.byText}>By Matheos Mattsson</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: Theme.secondaryColor,
        alignItems: 'center',
        borderBottomWidth: Theme.borderWidth,
        borderBottomColor: Theme.borderColor,
    },
    headerText: {
        color: Theme.textColor,
        fontSize: 32,
        paddingTop: 15,
        paddingBottom: 4,
        fontWeight: "500"
    },
    byText: {
        color: Theme.textColor,
        fontStyle: 'italic'
    }
})

export default Header