import React, { useContext, useState } from 'react'

export const INPUT_TYPES = {DISTANCE: 1, PERSONS: 2, CONSUMPTION: 3, MANUAL_FUEL: 4, AUTO_FUEL: 5, PICKER: 6}
export const FUEL_TYPES = {GAS95E10: '95E10', GAS98E: '98E', DIESEL: 'Diesel'}
export const CALCULATE_STATUS_KEY = 'CALCSTATUS'
export const RESULT_KEY = 'RESULT'

const StateContext = React.createContext()

export const useStateContext = () => useContext(StateContext)

export const StateProvider = ({ children }) => {
    const [distance, setDistance] = useState('')
    const [persons, setPersons] = useState('1')
    const [consumption, setConsumption] = useState('')
    const [fuelPrice, setFuelPrice] = useState('')
    const [autoPrice, setAutoPrice] = useState(true)
    const [pickerValue, setPickerValue] = useState(FUEL_TYPES.GAS95E10)
    const [result, setResult] = useState('')
    const [calculatePressed, setCalculatePressed] = useState(false)

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
            case CALCULATE_STATUS_KEY:
                return calculatePressed
            case RESULT_KEY:
                    return result
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
            case CALCULATE_STATUS_KEY:
                return setCalculatePressed
            case RESULT_KEY:
                return setResult
           default:
               throw new Error("Unknown type given to getSetter function!")
       }
   }

   const resetAll = () => {
    setDistance('')
    setConsumption('')
    setPersons('1')
    setFuelPrice('')
    setPickerValue(FUEL_TYPES.GAS95E10)
    setAutoPrice(true)
    setResult('')
    setCalculatePressed(false)
   }

    return (
        <StateContext.Provider value={{
            getValue, getSetter,
            resetAll
        }}>
            { children }
        </StateContext.Provider>
    )
}
