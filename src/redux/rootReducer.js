import { combineReducers } from 'redux'
import { counterReducer } from './Counter/counter.reducer'

const rootReducer = combineReducers({
    // counterReducer will return INITIAL_STATE at first
    counter: counterReducer,
})

export default rootReducer