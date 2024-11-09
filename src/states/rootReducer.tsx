import { combineReducers } from 'redux'
import { userReducer } from './reducer/UserSlice'
import { cartReducer } from './reducer/cartSlice'
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default rootReducer
