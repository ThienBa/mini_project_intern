import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaRegister } from '../../../utils/validations'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { registerAccountApiAction } from '../authSlice'
import { SweetAlertSuccess, SweetAlertWarning } from '../../../utils/SweetAlert'
import { useEffect } from 'react'

export default function Register() {
    const { register, handleSubmit, getValues, clearErrors, formState: { errors } } = useForm({
        resolver: yupResolver(schemaRegister),
    });
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        data.email = data.email.toLowerCase()
        data.username = data.username.toLowerCase()
        dispatch(registerAccountApiAction(data)).then((result) => {
            if (result.payload !== undefined) {
                navigate('/login')
                SweetAlertSuccess(t('you_have_successfully_registered_an_account_please_login_to_continue'))
            } else {
                SweetAlertWarning(t('username_or_email_already_exists'));
            }
        })
    }

    return (
        <main className="mt-0 py-10 lg:p-0 transition-all duration-200 ease-in-out text-white dark:bg-slate-900 flex items-center justify-center min-h-screen overflow-hidden bg-center bg-cover bg-light">
            <div className="relative flex flex-col min-w-0 max-w-[476px] break-words bg-transparent border-0 px-7 dark:bg-slate-850 shadow-white shadow-sm rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 text-center">
                    <h4 className="font-bold text-3xl text-white"> {t('signup')}</h4>
                    <p className="mb-0 mt-2">{t('enter_all_the_information_below_to_register')}</p>
                </div>
                <div className="flex-auto py-6">
                    <form onSubmit={handleSubmit(onSubmit)} role="form">
                        <div className="mb-4">
                            <input
                                type='text'
                                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                                placeholder={t('fullname')}
                                {...register("fullname")}
                            />
                            {errors.fullname && <p className="text-red-500 italic error">{t(errors.fullname.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type='email' className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                                placeholder={t('email')}
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500 italic error">{t(errors.email.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                                placeholder={t('username')}
                                {...register("username")}
                            />
                            {errors.username && <p className="text-red-500 italic error">{t(errors.username.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type='password' placeholder="Password" className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                                placeholder={t('password')}
                                {...register("password")}
                            />
                            {errors.password && <p className="text-red-500 italic error">{t(errors.password.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type='password'
                                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                                placeholder={t('password_confirm')}
                                {...register("passwordConfirm")}
                            />
                            {errors.passwordConfirm && <p className="text-red-500 italic error">{t(errors.passwordConfirm.message)}</p>}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"> {t('signup')}</button>
                        </div>
                    </form>
                </div>
                <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                    <p className="mx-auto mb-6 leading-normal text-sm">{t("have_an_account")} <Link to="/login" className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500">{t('signin')}</Link></p>
                </div>
            </div>
        </main>
    )
}
