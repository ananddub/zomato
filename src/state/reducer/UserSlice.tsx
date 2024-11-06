import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
interface UserState {
    user: any
    isVeg: boolean
}

const initialState: UserState = {
    user: {},
    isVeg: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Object>) => {
            state.user = action.payload
        },
        setIsVeg: (state, action: PayloadAction<boolean>) => {
            state.isVeg = action.payload
        }
    }
})


export const { setUser, setIsVeg } = userSlice.actions
export const selectUser = (state: RootState) => state?.user?.user

export default userSlice.reducer


