import Dashboard from "../views/admin/Dashboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import responsiveSlice from "../redux/responsiveSlice";
import { Navigate } from 'react-router-dom';
import { SweetAlertWarning } from "../utils/SweetAlert";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectAccessToken, selectIsRememberMe } from "../redux/selectors";
import { getAccessTokenCookie } from "../utils/settings";


export default function AdminLayout({ Component }) {
    const dispatch = useDispatch()
    const accessToken = useSelector(selectAccessToken)
    const isRememberMe = useSelector(selectIsRememberMe)
    const { t } = useTranslation()

    if (!accessToken) {
        SweetAlertWarning(t('you_do_not_have_permission_to_access_this_page'))
        return <Navigate to="/login" replace />
    }

    const handleCloseSidebarShow = () => {
        dispatch(responsiveSlice.actions.setSidebarShow(false))
    }

    return (
        <div className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500 bg-light">
            <Sidebar />
            <div className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps ps--active-y">
                <Header />
                <div onClick={handleCloseSidebarShow} className="w-full min-h-screen px-6 py-6 mx-auto">
                    <Component />
                </div>
                <Footer />
            </div>
        </div>
    );
}
