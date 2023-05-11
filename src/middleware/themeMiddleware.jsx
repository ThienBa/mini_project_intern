import { setThemeStorage } from "../utils/settings";

const themeMiddleware = (store) => (next) => (action) => {
    if (action.type === 'SET_THEME') {
        setThemeStorage(action.payload)
        if (action.payload === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }
    return next(action);
};

export default themeMiddleware;