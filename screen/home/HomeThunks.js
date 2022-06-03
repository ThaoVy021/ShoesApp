import { createAsyncThunk } from "@reduxjs/toolkit";

/* 
    Hàm GET tham số sẽ được truyền ngày trên link => ?tenthamso="giatri"&thamsothu2="giatri"
*/

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async  () => {
        console.log('fetchProducts')
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()

        return json.content
    }
)

/*
    - async  (thamsoa,thunkAPI)
    thunkAPI [Object] : distpath, getState()
    dispath: Chức năng tương tự như useDispath()
    getState() => giúp lấy state được lưu trữ trên store chung
    truyền nhiều tham số thì sử dụng dạng object {
        username: value,
        password: value
    }
*/
export const fetchProductByCategoryId = createAsyncThunk(
    'products/fetchProductByCategoryId',
    async  (category) => {
        const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${category.id}`)
        if(resp.status == 200 || resp.status == 201){
            const json = await resp.json()
            return json.content
        }else{
            return []
        }
    }
)

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async (_,{dispatch,getState}) => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product/getAllCategory')
        const json = await resp.json()

        dispatch(fetchProductByCategoryId({ id:getState().home.categorySelected }))

        return json.content
    }
)