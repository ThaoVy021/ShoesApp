import { createAsyncThunk } from "@reduxjs/toolkit"
import { KEY_ACCESS_TOKEN } from "../../common/Constant"
import { getLocalStorage } from "../../common/LocalStorage"

export const checkLogin = createAsyncThunk(
    'login/checkLogin',
    async (params) => {
        let resp = await fetch('http://svcy3.myclass.vn/api/Users/signin',{
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                email: params.email,
                password: params.password
            })
        })

        let json = await resp.json()
        console.log(json)

        return json.content.accessToken
    }
)

export const getLocalAccessToken = createAsyncThunk(
    'token/getLocalAccessToken',
    async () => {
        // Xử lý logic code trước khi update lên state trên store chung
        let token = await getLocalStorage(KEY_ACCESS_TOKEN)
        console.log(`Kiem tra token local`)
        console.log(token)
        if(token == undefined || token == null){
            return ""
        }else{
           return token
        }
    }
)
