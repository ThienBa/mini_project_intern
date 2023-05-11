import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Profile() {
  const { t } = useTranslation()
  return (
    <div className='px-5'>
      {t('profile')}
    </div>
  )
}
