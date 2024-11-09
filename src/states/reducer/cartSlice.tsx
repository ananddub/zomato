import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@states/store";


interface CartItem {
    isVeg: boolean
    id: string;
    name: string;
    price: number;
    quantity: number;
    cartPrice?: number;
    isCustomizable?: boolean;
    customizations?: any[];
}

interface RestaurantDetails {
    id: string;
    name: string;
    discount: string;
    discountAmount: string;
    time: string;
    distance: string;
    rating: number;
    imageUrl: string;
}

interface RestaurantCart {
    restaurant: RestaurantDetails;
    items: CartItem[];
}

interface CartState {
    carts: RestaurantCart[];

}

const initialState: CartState = {
    carts: [],

};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})
export const selectCarts = (state: RootState) => state?.cart
export default cartSlice.reducer
export const cartReducer = cartSlice.reducer
