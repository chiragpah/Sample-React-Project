import { createSlice } from "@reduxjs/toolkit"
const initialCounterState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
    name: "counter",                        //
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})
export const counterAction = counterSlice.actions; //counterslice will provide us with action object that contain key for all the reducer method which when execute  reduxtoolkit will create itself a built in dispatch action  with type set automatically 

export default counterSlice.reducer