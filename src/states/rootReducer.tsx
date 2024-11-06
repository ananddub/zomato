import { combineReducers } from 'redux'
import { userReducer } from './reducer/UserSlice'
const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer
