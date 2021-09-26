import axios from 'axios'
import { FUEL_TYPES } from '../StateContext'

const URL = 'https://www.polttoaine.net'    //URL From where to fetch yesterday's average fuel prices in Finland
const regex = /<td class="Hinnat">.*<\/tr>/g //Regex to get the correct HTML elements

export const getAveragePrice = async fuelType => {
    const html = await axios.get(URL)
    const content = html.data
    const matches = content.match(regex)

    const pricesArr = matches[1].replace(/[^0-9.]+/g, ' ').trim().split(' ')

    switch (fuelType) {
        case FUEL_TYPES.GAS95E10:
            return pricesArr[0]
        case FUEL_TYPES.GAS98E:
            return pricesArr[1]
        case FUEL_TYPES.DIESEL:
            return pricesArr[2]
        default:
            throw new Error("Unknown fuel type!")
    }
    
}