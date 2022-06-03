import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchCategories, fetchProductByCategoryId } from "./HomeThunks";

const initialState = {
    isLoading: false,
    dataProducts: [],
    dataCategories: [],
    categorySelected: ""
}

/* 
    addCase(trạng thái tương ứng với promise ( fetch ), (state trên store, action (dispatch được gọi từ Thunk)) )
*/
const homeSlice = createSlice({
    name:'homeSlice',
    initialState: initialState,
    reducers: {
        onSelectedCategory: (state,action)=>{
            state.categorySelected = action.payload
        }
    },
    
    extraReducers: (builder)=>{
        /* 
            Update giá trị trả ra từ thunk lên store chung
        */
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled,(state,action)=>{
            state.dataProducts = action.payload
        }).addCase(fetchCategories.fulfilled,(state,action)=>{
            state.dataCategories = action.payload
        }).addCase(fetchProductByCategoryId.fulfilled,(state,action)=>{
            state.dataProducts = action.payload
        })
    }
})

export const {onSelectedCategory} = homeSlice.actions
export default homeSlice.reducer