import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaLogin } from '../../../utils/validations'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import authSlice, { loginApiAction } from '../authSlice'
import { useEffect, useState } from 'react'
import { SweetAlertSuccess, SweetAlertWarning } from '../../../utils/SweetAlert'

export default function Login() {
  const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    data.username = data.username.toLowerCase()
    dispatch(loginApiAction(data)).then((result) => {
      if (result.payload !== undefined) {
        navigate('/dashboard')
        SweetAlertSuccess(t('wellcome_to_my_mini_project'))
      } else {
        SweetAlertWarning(t('username_or_password_incorrect'));
        reset()
      }
    })
  }

  const togglePasswordVisibility = (e) => {
    setIsPasswordVisible(prevState => !prevState)
  }

  const handleChangeRememberMeInput = (e) => {
    dispatch(authSlice.actions.setRememberMe(e.target.checked))
  }

  const renderIconShowHidePassword = () => {
    if (!isPasswordVisible)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      )
    else return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    )
  }

  return (
    <main className="mt-0 py-10 lg:p-0 transition-all duration-200 ease-in-out text-white dark:bg-slate-900 flex items-center justify-center min-h-screen overflow-hidden bg-center bg-cover bg-light">
      <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 px-7 dark:bg-slate-850 shadow-white shadow-sm rounded-2xl bg-clip-border">
        <div className="p-6 pb-0 mb-0 text-center">
          <h4 className="font-bold text-3xl dark:text-white">{t('signin')}</h4>
          <p className="mb-0 mt-2">{t('enter_your_username_and_password_to_sign_in')}</p>
        </div>
        <div className="flex-auto py-6">
          <form onSubmit={handleSubmit(onSubmit)} role="form">
            <div>
              <input
                type="text"
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder={t('username')}
                {...register("username")}
              />
            </div>
            <p className="text-red-500 italic mb-4 error">{errors.username && t(errors.username.message)}</p>

            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder={t('password')}
                {...register("password")}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {renderIconShowHidePassword()}
              </div>
            </div>
            <p className="text-red-500 italic mb-4 error">{errors.password && t(errors.password.message)}</p>

            <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
              <input onChange={handleChangeRememberMeInput} id="showPassword" className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" />
              <label className="ml-2 font-normal cursor-pointer select-none text-sm text-white" htmlFor="showPassword">{t('remember_me')}</label>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25">{t('signin')}</button>
            </div>
          </form>
        </div>
        <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
          <p className="mx-auto mb-6 leading-normal text-sm">{t("dont_have_an_account")} <Link to="/register" className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500">{t('signup')}</Link></p>
        </div>
      </div>
    </main>
  )
}
