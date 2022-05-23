import { configureStore } from '@reduxjs/toolkit' 
import homeReducer from './screen/home/HomeSlice'

export const store = configureStore({
    reducer: {
      home: homeReducer
    },
})

//Bước 1: tạo Store.js khai báo reducer cần sử dụng
//Bước 2: Tạo ra file Slice (nơi khai báo action và reducer)