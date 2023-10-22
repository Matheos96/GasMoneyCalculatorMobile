import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, Switch, View } from 'react-native'
import { getData, SETTINGS_KEYS, storeData } from '../services/settingsService'
import Theme from '../constants/theme'
import Header from '../components/Header'

const Settings = () => {

    const [useImperial, setUseImperial] = useState(false)
    useEffect(() => {
        (async () => {
            setUseImperial(await getData(SETTINGS_KEYS.USE_IMPERIAL) === 'true')
        })()
    })

    const onImperialSettingChange = () => {
        const newVal = !useImperial
        setUseImperial(newVal)
        storeData(SETTINGS_KEYS.USE_IMPERIAL, newVal.toString())
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header title='Settings' />
            <View style={styles.settingsContainer}>
                <View style={styles.settingsItem}>
                    <Text style={styles.settingHeader}>Use Imperial Units</Text>
                    <Text style={styles.settingDescription}>
                        Toggle this switch to use imperial measurement units (miles and miles per gallon) instead of the standard metric units (kilometres and litre per 100km)
                    </Text>
                    <Switch style={styles.switch}
                        value={useImperial}
                        onChange={onImperialSettingChange} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryColor,
    },
    settingsContainer: {
        flex: 1,
        alignItems: 'center'
    },
    settingsItem: {
        alignItems: 'center',
        backgroundColor: Theme.altColor,
        width: '100%',
        borderColor: Theme.borderColor,
        borderBottomWidth: 2
    },
    settingHeader: {
        fontSize: 20,
        color: Theme.textColor,
    
    },
    settingDescription: {
        fontSize: 15,
        color: Theme.textColor,
        textAlign: 'center'
    },
    switch: {
        transform: [ { scale: 1.5 } ]
    },
})

export default Settings