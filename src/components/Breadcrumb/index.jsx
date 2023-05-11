import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Beadcrumb() {
    const [path, setPath] = useState('Dashboard')
    const { t } = useTranslation()
    
    useEffect(() => {
        const url = new URL(window.location.href)
        const path = url.pathname.split('/').pop()
        setPath(path);
    }, [window.location.href])

    return (
        <nav>
            <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li className="text-sm leading-normal">
                    <Link className="opacity-50 dark:text-white" to="/dashboard">{t('admin')}</Link>
                </li>
                <li className="text-sm pl-2 capitalize leading-normal before:float-left before:pr-2 before:content-['/'] dark:text-white dark:before:text-white" aria-current="page">{t(`${path}`)}</li>
            </ol>
            <h6 className="mb-0 font-bold capitalize dark:text-white">{t(`${path}`)}</h6>
        </nav>
    )
}
