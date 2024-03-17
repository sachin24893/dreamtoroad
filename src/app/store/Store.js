"use client"
import { configureStore } from "@reduxjs/toolkit";
import Fare_slice from "./reducers/Fare_slice";
import User_credential from "./reducers/User_credential";
import Login from "./reducers/Login";

export const store=configureStore({
      reducer:{
            fare:Fare_slice,
            user:User_credential,
            login:Login,
      }
})