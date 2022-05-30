import { createSlice } from "@reduxjs/toolkit";
import { saveLocalStorage, getLocalStorage } from "../../common/LocalStorage";
import { checkLogin, getLocalAccessToken } from "./LoginThunk";
import { KEY_ACCESS_TOKEN } from "../../common/Constant";

const initialState = {
    isLoading: false,
    accessToken: ""
}

const loginSlice = createSlice({
    name:'loginSlice',
    initialState: initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(checkLogin.fulfilled, (state,action)=>{
            state.accessToken = action.payload
            //lưu offline
            saveLocalStorage(KEY_ACCESS_TOKEN,action.payload)
        }).addCase(getLocalAccessToken.fulfilled,(state,action)=>{
            state.accessToken = action.payload
        })
    }
})

export default loginSlice.reducer