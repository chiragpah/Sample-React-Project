const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => { //reducer function
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = redux.createStore(counterReducer); // create central store also provided dispatch function to it for modifying state
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}
store.subscribe(counterSubscriber); //subscribe to redux store for function counterSubscriber
store.dispatch({ type: 'INCREMENT' }); //dispatch function to indirectly modify state
store.dispatch({ type: 'DECREMENT' });