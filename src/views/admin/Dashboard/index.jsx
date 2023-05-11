import { useTranslation } from 'react-i18next'

export default function Dashboard() {
    const { t } = useTranslation();

    return (
        <>
            <div className="px-3">
                {t('dashboard')}
            </div>
        </>
    )
}
