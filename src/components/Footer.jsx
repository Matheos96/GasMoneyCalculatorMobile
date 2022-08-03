import React, { useState } from 'react'
import Calculate from './Calculate'
import Result from './Result'

const Footer = () => {
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState('')

    return (
        <>
            <Calculate setShowResult={setShowResult} setResult={setResult} />
            <Result showResult={showResult} result={result} />
        </>
    )
}

export default Footer