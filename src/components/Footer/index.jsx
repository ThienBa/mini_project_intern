import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="pb-4">
      <div className="w-full px-6 mx-auto">
        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
          <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
              ©
              2023,
              {t('made_with_by')} <i className="fa fa-heart" aria-hidden="true" /> 
              <a href="https://git.appscyclone.com/internship/fe-ba-huynh/-/tree/develop" className="font-semibold text-slate-700 dark:text-white" target="_blank"> ThienBa </a>
              {t('for_a_better_web')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
