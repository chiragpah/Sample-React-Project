// import { Component } from 'react';
import classes from './Counter.module.css';
// import { connect } from 'react-redux';
import { counterAction } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux'; //also can use useStore      useDispatch is a function which provide us with dispatch function 
const Counter = () => {
    const counter = useSelector(state => state.counter.counter);//useSelector will get you a slice of data that you want to extract from store and utilize it in component it will also subscribe the compomnent to store and unsubscribe automatically when unmount of component
    const show = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(counterAction.increment()); //here we execute this method which will create unique action object identifier automatically
    }
    const decrementHandler = () => {
        dispatch(counterAction.decrement());
    }
    const increaseHandler = () => {
        dispatch(counterAction.increase(5))//value provided here will be specify as payload if you want to access it
    }
    const toggleCounterHandler = () => {
        dispatch(counterAction.toogleCounter())
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}
export default Counter
// class Counter extends Component {
//     incrementHandler = () => {
//         this.props.increment();
//     }
//     decrementHandler = () => {
//         this.props.decrement()
//     }
//     toggleCounterHandler = () => {

//     }
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         )
//     }

// }
// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }

// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => { dispatch({ type: 'increment' }) },
//         decrement: () => { dispatch({ type: 'decrement' }) }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);//connect will return function which we execute to by passing component to connect to redux store when executing connect we pass 2 arg function to convert state to prop so component get state from store as prop