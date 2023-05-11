import { useState } from 'react'
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentLanguage, selectPaginationProductList } from "../../../redux/selectors"
import productSlice from '../Products/productSlice'
import settingsSlice from './settingsSlice'
import { setThemeAction } from '../../../redux/actions'
import { getThemeStorage } from '../../../utils/settings'

export default function Setting() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const currentLanguage = useSelector(selectCurrentLanguage);
    const { limit } = useSelector(selectPaginationProductList)

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
        dispatch(settingsSlice.actions.setLanguageSelect(e.target.value))
    }

    const handleChangeProductPerPage = (e) => {
        const limit = Math.min(Math.max(event.target.value, 1), 120)
        dispatch(productSlice.actions.setLimitProductPerPage(limit))
    }

    const handleChangeDarkMode = (e) => {
        let theme = 'dark'
        if (!e.target.checked) {
            theme = 'light'
        }
        dispatch(setThemeAction(theme))
    }

    return (
        <>
            <div>
                <label htmlFor="language">{t('selected_language')}: </label>
                <div className="relative inline-block w-[150px] ml-0 lg:ml-5 mt-2 lg:mt-0">
                    <select className="pl-3 pr-5 w-full text-black dark:bg-slate-850 dark:text-white border border-solid border-gray-300 select px-2 py-2 rounded-lg outline-none appearance-none" value={currentLanguage} onChange={changeLanguage}>
                        <option value="english">English</option>
                        <option value="vietnamese">Tiếng Việt</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 14l-5-5h10l-5 5z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <label htmlFor="language">{t('number_products_per_page')} (1-120): </label>
                <div className="relative inline-block ml-0 lg:ml-5 mt-2 lg:mt-0">
                    <input
                        type="number"
                        min={1}
                        max={120}
                        className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                        value={limit}
                        onChange={handleChangeProductPerPage}
                    />
                </div>
            </div>
            <div className="mt-5">
                <div className="mb-4 flex items-center">
                    <label htmlFor="dark-mode">{t('dark_mode')}:</label>
                    <label className="relative inline-flex items-center cursor-pointer ml-0 lg:ml-5 mt-2 lg:mt-0">
                        <input id="dark-mode" type="checkbox" onChange={handleChangeDarkMode} defaultChecked={getThemeStorage() === 'dark' ? true : false} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                </div>
            </div>
        </>
    );
}
