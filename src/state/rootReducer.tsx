import { combineReducers } from "redux";
import userReducer from "./reducer/UserSlice"


export const rootReducer = combineReducers({
    user: userReducer
})
