import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import authSlice from '../../views/auth/authSlice'
import { SweetAlertSuccess } from '../../utils/SweetAlert'
import responsiveSlice from '../../redux/responsiveSlice'
import { selectSidebarShow } from '../../redux/selectors'

export default function Navbar() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const sidebarToggle = useSelector(selectSidebarShow)

    const handleLogoutUser = async () => {
        await dispatch(authSlice.actions.clearAccessToken())
        await SweetAlertSuccess(t('logout_successful'))
    }

    const handleBarClick = () => {
        dispatch(responsiveSlice.actions.setSidebarShow(!sidebarToggle))
    }

    return (
        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4"></div>
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                <li className="flex items-center">
                    <Link onClick={handleLogoutUser} to="/" className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand dark:text-white">
                        <FontAwesomeIcon icon="sign-out" />
                        <span className="hidden sm:inline ml-1">{t('signout')}</span>
                    </Link>
                </li>
                <li className="flex items-center pl-4 xl:hidden">
                    <button onClick={handleBarClick} className="block p-0 text-sm transition-all ease-nav-brand dark:text-white text-light-black">
                        <div className="w-4.5 overflow-hidden">
                            <FontAwesomeIcon icon="fa-bars" />
                        </div>
                    </button>
                </li>
                <li className="flex items-center px-4">
                    <Link to="/admin/setting" className="p-0 text-sm transition-all ease-nav-brand dark:text-white">
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
