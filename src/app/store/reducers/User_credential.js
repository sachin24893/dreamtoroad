const { createSlice } = require("@reduxjs/toolkit");

export const User_credential=createSlice({
      name:"user",
initialState:{
      user_credential:[]
},
reducers:{
      setusercredential(state,action){
            state.user_credential.push(action.payload)
      }
}

})
export const {setusercredential}=User_credential.actions
export default User_credential.reducer