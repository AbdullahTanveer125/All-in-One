import {createSlice} from '@reduxjs/toolkit'


const initialState = { value: 0 }


const amountSlice= createSlice({
    name: 'AAAmount',// name
    initialState,
    reducers:{
        increment(state){
            state.value++
        },
        decrement(state){
            state.value--
        },
        incrementByAmount(state,action){
            state.value+= action.payload
        },
        reset(state){
            state.value=0
        },
    }

})




export const {increment, decrement, incrementByAmount, reset}=amountSlice.actions
export default amountSlice.reducer











