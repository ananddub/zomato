import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
        addItemToCart: (state, action: PayloadAction<{
            resturant: RestaurantDetails,
            items: CartItem
        }>) => {
            const { resturant, items } = action.payload
            const existingResturantCart = state.carts.find(cart => cart.restaurant.id === resturant.id)
            if (existingResturantCart) {
                const existingItem = existingResturantCart.items.find(cardItem => cardItem.id === items.id)
                if (existingItem) {
                    existingItem.quantity += 1
                    existingItem.cartPrice = (existingItem.cartPrice || 0) + existingItem?.price
                } else {
                    existingResturantCart.items
                        .push({
                            ...items,
                            quantity: 1,
                            cartPrice: items.price
                        })
                }
            } else {
                state.carts.push({
                    restaurant: resturant,
                    items: [{ ...items, quantity: 1, cartPrice: items.price }]
                })
            }
        },
        removeItemFromCart: (state, action: PayloadAction<{
            resturantId: string,
            itemId: string
        }>) => {
            const { resturantId, itemId } = action.payload
            const resturantCart = state.carts.find(cart => cart.restaurant.id === resturantId)
            if (!resturantCart) return
            const itemIndex = resturantCart.items.findIndex(item => item.id === itemId)
            if (itemIndex !== -1) {
                const item = resturantCart.items[itemIndex]
                if (item.quantity > 1) {
                    item.quantity -= 1
                    item.cartPrice = (item.cartPrice || 0) - item?.price
                } else {
                    resturantCart.items.splice(itemIndex, 1)
                }
            }
            if (resturantCart.items.length === 0) {
                state.carts = state.carts.filter(cart => cart.restaurant.id !== resturantId)
            }
        }
    },

})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export const selectCarts = (state: RootState) => state?.cart
export default cartSlice.reducer
export const cartReducer = cartSlice.reducer
