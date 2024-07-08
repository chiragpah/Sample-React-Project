// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit" // with createSlice we are creating slice of a global state to manage different pieces of state 
import counterReducer from "./counter"
import authReducer from "./auth"

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     else if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     else if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     else if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }
// const store = createStore(counterSlice.reducer);//but this will work of single slice reducer
const store = configureStore({ //this will also get on main reducer but can contain multiple small reducer as object which in term will be provided as one main
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store;