import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminServices } from '../../../services/adminServices'
import { PRODUCT_PER_PAGE } from '../../../utils/settings';

let productPerPage = 12

if (JSON.parse(localStorage.getItem(PRODUCT_PER_PAGE))) {
    productPerPage = JSON.parse(localStorage.getItem(PRODUCT_PER_PAGE));
}


const productSlice = createSlice({
    name: 'products',
    initialState: {
        loadingSkeletonVisible: false,
        productList: [],
        pagination: {
            totalItem: 0,
            currentPage: 1,
            limit: productPerPage,
        },
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.pagination.currentPage = action.payload
        },
        setLimitProductPerPage: (state, action) => {
            state.pagination.limit = action.payload
            localStorage.setItem(PRODUCT_PER_PAGE, action.payload)
        },
        setLoadingSkeleton: (state, action) => {
            state.loadingSkeletonVisible = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getListProductApiAction.fulfilled, (state, action) => {
                state.productList = action.payload.items
                state.pagination = action.payload.pagination
            })
    }
})

export const getListProductApiAction = createAsyncThunk('products/getListProductApiAction', async ({ currentPage, limit, searchTerm, sortBy, sortType, active }) => {
    try {
        let url = `page=${currentPage}&limit=${limit}&active=${active}`;
        if (searchTerm) {
            url += `&searchTerm=${searchTerm}`;
        }
        if (sortBy && sortType) {
            url += `&sortBy=${sortBy}&sortType=${sortType}`;
        }
        const { data } = await adminServices.getListProductsApi(url)
        return data
    } catch (error) {
        console.log(error)
    }
})

export default productSlice