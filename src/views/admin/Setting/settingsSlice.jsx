import { createSlice } from '@reduxjs/toolkit'
import { CURRENT_LANGUAGE } from '../../../utils/settings';

let language = 'enlish';
if (localStorage.getItem(CURRENT_LANGUAGE)) {
    language = localStorage.getItem(CURRENT_LANGUAGE);
}

const settingsSlice = createSlice({
    name: 'language',
    initialState: {
        language,
        isDarkTheme: document.documentElement.classList.contains("dark")
    },
    reducers: {
        setLanguageSelect: (state, action) => {
            localStorage.setItem(CURRENT_LANGUAGE, action.payload)
            return state = action.payload
        }
    }
})

export default settingsSlice