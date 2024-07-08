import { useState } from "react"
export function useInput(defaultValues, validationFn) {
    const [enteredValues, setEnteredValues] = useState(defaultValues)
    const [didEdit, setDidEdit] = useState(false)
    const vaLueIsValid = validationFn(enteredValues)
    function handleInputChange(event) {
        setEnteredValues(event.target.value)
        setDidEdit(false)
    }
    function handleInputBlur() {
        setDidEdit(true)
    }
    return {
        value: enteredValues,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !vaLueIsValid
    }
}