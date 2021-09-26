import React, { useContext, useState } from 'react'

export const INPUT_TYPES = {DISTANCE: 1, PERSONS: 2, CONSUMPTION: 3, MANUAL_FUEL: 4, AUTO_FUEL: 5, PICKER: 6}
export const FUEL_TYPES = {GAS95E10: '95E10', GAS98E: '98E', DIESEL: 'Diesel'}

const StateContext = React.createContext()

export const useStateContext = () => useContext(StateContext)

export const StateProvider = ({ children }) => {
    const [distance, setDistance] = useState('')
    const [persons, setPersons] = useState('')
    const [consumption, setConsumption] = useState('')
    const [fuelPrice, setFuelPrice] = useState('')
    const [autoPrice, setAutoPrice] = useState(true)
    const [pickerValue, setPickerValue] = useState(FUEL_TYPES.GAS95E10)

    const getValue = type => {
         switch(type) {
            case INPUT_TYPES.DISTANCE:
                return distance
            case INPUT_TYPES.PERSONS:
                return persons
            case INPUT_TYPES.CONSUMPTION:
                return consumption
            case INPUT_TYPES.MANUAL_FUEL:
                return fuelPrice
            case INPUT_TYPES.AUTO_FUEL:
                return autoPrice
            case INPUT_TYPES.PICKER:
                return pickerValue
            default:
                throw new Error("Unknown type given to getValue function!")
        }
    }

    const getSetter = type => {
        switch(type) {
           case INPUT_TYPES.DISTANCE:
               return setDistance
           case INPUT_TYPES.PERSONS:
               return setPersons
           case INPUT_TYPES.CONSUMPTION:
               return setConsumption
            case INPUT_TYPES.MANUAL_FUEL:
               return setFuelPrice
            case INPUT_TYPES.AUTO_FUEL:
               return setAutoPrice
            case INPUT_TYPES.PICKER:
               return setPickerValue
           default:
               throw new Error("Unknown type given to getSetter function!")
       }
   }

    return (
        <StateContext.Provider value={{
            getValue, getSetter
        }}>
            { children }
        </StateContext.Provider>
    )
}
