import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
      const resp = await fetch('http://svcy3.myclass.vn/api/Product')
      const json = await resp.json()

      return json.content
  }
)

/* 
  - async ( tham so, thunkAPI)
  thunkAPI [Object]: dispatch, getState()
  getState() => giúp lấy state được lưu trữ trên store chung
  dispatch => chức năng tương tự như useDispatch()
  truyền nhiều tham số thì sử dụng object {
    userName: value,
    password: value
  
  }
*/
export const fetchProductByCategoryId = createAsyncThunk(
  'product/fetchProductByCategoryId',
  async (category) => {
      const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId.id}`)
      if(resp.status == 200 || resp.status == 201){
        const json = await resp.json()
        return json.content
      } else {
        return [];
      }
     
      //dispatch(fetchProducts())
      return json.content
  }
)

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_,{dispatch,getState}) => {
    const resp = await fetch('http://svcy3.myclass.vn/api/Product/getAllCategory')
    const json = await resp.json()

    dispatch(fetchProductByCategoryId({id: getState().home.categorySelected}))

    return json.content
  }
)