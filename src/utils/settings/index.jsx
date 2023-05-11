import { getCookie } from "../cookies";

export const DOMAIN = 'http://localhost:3333';
export const TOKEN = 'access_token';
export const REMEMBER_ME = 'remember_me';
export const THEME = 'theme';
export const PRODUCT_PER_PAGE = 'product_per_page';
export const USER_LOGIN = 'user_login';
export const CURRENT_LANGUAGE = 'current_language';
export const getAccessTokenStorage = () => JSON.parse(localStorage.getItem(TOKEN))?.accessToken;
export const setAccessTokenStorage = (data) => localStorage.setItem(TOKEN, JSON.stringify(data));
export const getAccessTokenCookie = () => JSON.parse(getCookie(TOKEN))?.accessToken;
export const setThemeStorage = (data) => localStorage.setItem(THEME, data);
export const getThemeStorage = () => localStorage.getItem(THEME);

export const editorConfig = {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
        ],
    },
    formats: {
        bold: { "font-weight": "bold" },
        italic: { "font-style": "italic" },
        underline: { "text-decoration": "underline" },
        strike: { "text-decoration": "line-through" },
        script: {
            "vertical-align": "baseline",
            "font-size": "smaller",
            "padding-top": "5px",
        },
        size: { "font-size": ["10px", "12px", "16px", "18px", "20px", "24px"] },
        font: {
            "font-family": [
                "Arial",
                "Courier New",
                "Georgia",
                "Helvetica",
                "sans-serif",
                "Tahoma",
                "Times New Roman",
                "Verdana",
            ],
        },
        color: { color: "#000", background: "#fff" },
    }
}