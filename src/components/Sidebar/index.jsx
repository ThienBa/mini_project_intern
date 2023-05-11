import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectSidebarShow } from '../../redux/selectors'
import responsiveSlice from '../../redux/responsiveSlice'

export default function Sidebar() {
    const { t } = useTranslation()
    const sidebarShow = useSelector(selectSidebarShow)
    const dispatch = useDispatch()

    const handleCloseSidebarShow = () => {
        dispatch(responsiveSlice.actions.setSidebarShow(false))
    }

    return (
        <aside className={`fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 ${!sidebarShow && '-translate-x-full'} bg-[#e0e0e0] border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps`}>
            <button onClick={handleCloseSidebarShow} type="button" className="inline-flex xl:hidden absolute right-3 top-3 bg-white rounded-full items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 select-none p-2">
                <span className="sr-only">Close menu</span>
                <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="h-19">
                <Link className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700" to="/dashboard">
                    <span className="ml-1 text-2xl font-semibold transition-all duration-200 ease-nav-brand">Mini Project</span>
                </Link>
            </div>
            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full ps ps--active-y">
                <ul className="flex flex-col pl-0 mb-0">
                    <li className="mt-0.5 w-full">
                        <NavLink className="dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-slate-700 transition-colors" to="/dashboard">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <FontAwesomeIcon icon="dashboard" />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">{t('dashboard')}</span>
                        </NavLink>
                    </li>
                    <li className="mt-0.5 w-full">
                        <NavLink className="rounded-lg  dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors" to="/admin/products">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <FontAwesomeIcon icon="list" />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">{t('products')}</span>
                        </NavLink>
                    </li>
                    <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">{t('account_pages')}</h6>
                    </li>
                    <li className="mt-0.5 w-full">
                        <NavLink className="rounded-lg  dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors" to="/admin/profile">
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <FontAwesomeIcon icon="user" />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">{t('profile')}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
