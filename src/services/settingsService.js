import AsyncStorage from "@react-native-async-storage/async-storage"

export const SETTINGS_KEYS = {USE_IMPERIAL: 'USE_IMPERIAL'}

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    }
    catch (e) {
        console.log(`Error: ${e}`)
    }
}

export const getData = async key => {
    try {
        return await AsyncStorage.getItem(key)
    }
    catch (e) {
        console.log(`Error: ${e}`)
    }
    return null
}