import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
const Header = ({ title }) => {
    return (
        <View style={styles.header}>
                <Text style={styles.headerText}>Gas Money Calculator</Text>
                <Text style={styles.byText}>By Matheos Mattsson</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5497A7',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#50858B',
        paddingTop: 20
    },
    headerText: {
        color: '#FFF5EE',
        fontSize: 32,
        paddingTop: 15,
        paddingBottom: 4,
        fontWeight: "500"
    },
    byText: {
        color: '#FFF5EE',
        fontStyle: 'italic'
    }
})

export default Header