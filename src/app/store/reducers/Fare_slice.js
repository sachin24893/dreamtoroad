"use client"
import { createSlice } from "@reduxjs/toolkit";
export const Fare_slice=createSlice({
      name:'fare',
      initialState:{
            fare_data:[]
      },
      reducers:{
            setfare(state,action){
                  state.fare_data.push(action.payload)
            }

      }


})
export const {setfare}=Fare_slice.actions
export default Fare_slice.reducer