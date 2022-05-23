import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts, fetchCategories, fetchProductByCategoryId } from './HomeThunks'

const initialState = {
    isLoading: false,
    dataProducts: [],
    dataCategories: [],
}

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState: initialState,
    reducers:{
        getCategories: (state, action) => {
            state.categoryData = categoryData
        },
        onSelectedCategory: (state, action) => {
            let categoryId = action.payload
            state.currentCategory = action.payload
            state.menuData = menuData.filter((value) => categoryId == value.categoryId)
        }
    }, 
    extraReducers: (builder)=>{
        /* 
        update giá trị trả ra từ thunk trên store chung
        */
        builder.addCase(fetchProducts.pending, (state,action) => {
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.dataProducts = action.payload
        }).addCase(fetchCategories.fulfilled, (state,action)=>{
            state.dataCategories = action.payload
        }).addCase(fetchProductByCategoryId.fulfilled, (state, action) => {
            console.log('fetch Product fulfilled')
            state.dataProducts = action.payload
        })
    }
})

export default homeSlice.reducer 