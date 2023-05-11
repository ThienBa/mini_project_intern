import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { SweetAlertWarning } from '../utils/SweetAlert'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectAccessToken } from '../redux/selectors'

export default function AuthLayout({ Component }) {
    const { t } = useTranslation()
    const accessToken = useSelector(selectAccessToken)

    if (accessToken) {
        return <Navigate to="/dashboard" replace />
    }

    return (
        <Component />
    )
}
