import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addToCheckout: (state,action)=>{
            state.push(action.payload);
            console.log(state)
            return state
        },
        removeFromCheckout: (state,action)=>{
            const index = state.findIndex((item)=>item.title === action.payload)
            if (index >= 0){
                state.splice(index, 1);
            }
            return state
        }
    }
})

export const {addToCheckout, removeFromCheckout} = basketSlice.actions

export default basketSlice.reducer;