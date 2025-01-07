import {useReducer} from 'react'

const reducer = (state, action) =>{
    if (action.type === 'increment'){
        return {
            count: state.count + 1
        }
    }
    if (action.type === 'decrement'){
        return {
            count: state.count - 1
        }
    }
    throw Error('unknown action type')
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});
    
    return (
        <>
        <button onClick={() => dispatch({type: 'increment'})}>
          add 1
        </button>
        <p>count is {state.count}</p>
        <button onClick={() => dispatch({type: 'decrement'})}>
          substract 1
        </button>
        </>
    )
}

export default Counter