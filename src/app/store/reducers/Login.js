import { createSlice } from "@reduxjs/toolkit";

export const login=createSlice({
      name:"login",
      initialState:{
            
            login_state:[]
      },
      reducers:{
            setloginstate(state,action){
                 state.login_state.push(action.payload) 
            }
      }

})
export const {setloginstate}=login.actions
export default login.reducer