import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TOKEN, getAccessTokenCookie, getAccessTokenStorage, setAccessTokenStorage } from '../../utils/settings'
import { authServices } from '../../services/authServices'
import { deleteCookie, getCookie, setCookie } from '../../utils/cookies'

let token = getAccessTokenStorage() || getAccessTokenCookie()
let rememberMe = false

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loadingVisible: false,
        isRememberMe: rememberMe,
        accessToken: token,
    },
    reducers: {
        clearAccessToken: (state, action) => {
            localStorage.removeItem(TOKEN)
            deleteCookie(TOKEN)
            state.accessToken = ''
            state.isRememberMe = false
        },
        setRememberMe: (state, action) => {
            state.isRememberMe = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginApiAction.pending, (state, action) => {
                state.loadingVisible = true
            })
            .addCase(loginApiAction.fulfilled, (state, action) => {
                state.loadingVisible = false
                state.accessToken = action.payload
                if (action.payload) {
                    state.isRememberMe ? setAccessTokenStorage(action.payload) : setCookie(TOKEN, JSON.stringify(action.payload), 1)
                }
            })
            .addCase(registerAccountApiAction.pending, (state, action) => {
                state.loadingVisible = true
            })
            .addCase(registerAccountApiAction.fulfilled, (state, action) => {
                state.loadingVisible = false
            })
    }
})

export const loginApiAction = createAsyncThunk('auth/loginApiAction', async (userLogin) => {
    try {
        const { data } = await authServices.loginApi(userLogin)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const registerAccountApiAction = createAsyncThunk('auth/registerAccountApiAction', async (newUser) => {
    try {
        const { data } = await authServices.registerUserApi(newUser)
        return data
    } catch (error) {
        console.log(error)
    }
})

export default authSlice