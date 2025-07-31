import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item: [{title: 'Test Item', quantity: 0, total: 0, price: 6 },
        {title: 'Test Item', quantity: 0, total: 0, price: 6 }
        ]
    },
    reducers:{
         

        actionAddToCart(state,action){  
            const qty = state.item.quantity+1;
            state.item.quantity = qty || 1;
            state.item.total = qty*action.payload.price  || 10;

        },
        actionIncreaseCartby1(state,action){
            const qty = state.item.quantity+1;

            state.item.quantity = qty ;
            state.item.total = qty*action.payload.price  ;

        },
        actionDecreaseCartby1(state,action){
            const qty = state.item.quantity-1;
           state.item.quantity = qty ;
            state.item.total = qty*action.payload.price  ;
        },

    }

})

export const {actionAddToCart,actionIncreaseCartby1,actionDecreaseCartby1} = cartSlice.actions;

export default cartSlice.reducer;