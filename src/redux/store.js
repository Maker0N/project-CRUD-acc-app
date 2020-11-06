import { createStore, combineReducers } from 'redux'
import taskReducer from './taskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


// const composeFunc = process.env.NODE_ENV === 'development' ? composeWhisDevTools : compose
const composeFunc = composeWithDevTools
const composedEnchanters = composeFunc()
const reducers = combineReducers({
    taskReducer,
})

let store = createStore(reducers, composedEnchanters)

export default store