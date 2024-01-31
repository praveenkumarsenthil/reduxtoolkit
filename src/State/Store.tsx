import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice"

export const store = configureStore({
    reducer:{
        counter:counterReducer 

    }
})


export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch