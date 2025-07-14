import { createAction, createReducer } from '@reduxjs/toolkit'


const initialState = { value: 0 }


// action generators

//in qoutation, write action type after slash "/" because it give sence or hint or idea that what action do

const increment = createAction('amount/increment')
const decrement = createAction('amount/decrement')
const incrementByAmount = createAction('amount/incrementByAmount')







// reducers
const amountReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state) => {
        state.value++
        //this is reducer's state not global state
        //return is not required
    })

    builder.addCase(decrement, (state) => {
        state.value--
    })

    builder.addCase(incrementByAmount, (state,action) => {
        state.value+=action.payload 
    })
})






export {increment, decrement, incrementByAmount}
export default amountReducer