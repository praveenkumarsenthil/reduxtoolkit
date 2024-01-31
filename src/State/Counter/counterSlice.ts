import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface counterState {
    value : number
}

const initialState : counterState = {
    value:0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        increment:(state) =>{
            state.value += 1
        },
        decrement:(state) =>{
            state.value -= 1
        },
        incremantByAction:(state,action:PayloadAction<number>)=>{
            state.value += action.payload
        },
        extraReducers:(builder:any)=>{
            builder.addCase(incrementAsync.pending,()=>{
                console.log("incrementAsync.pending",incrementAsync.pending);
                
            })
        .addCase(
                incrementAsync.fulfilled,
                (state:any,action:PayloadAction<number>)=>{
                    state.value += action.payload;
                }
            )
        }
    }

})


export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount:number)=>{
        await new Promise((resolve)=>setTimeout(resolve,1000))
        return amount
    }
)

export const {increment,decrement,incremantByAction} = counterSlice.actions;
export default counterSlice.reducer;

