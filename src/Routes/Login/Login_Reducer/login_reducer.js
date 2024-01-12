import { createSlice } from "@reduxjs/toolkit";

const authenticated=createSlice({
    name:'authenticated',
    initialState:false,
    reducers:{
        isAuth:(state,action)=>{
            return true
        },
        notAuth:(state,action)=>{
            return false
        }
    }
})
export default authenticated.reducer
export const {isAuth,notAuth}=authenticated.actions