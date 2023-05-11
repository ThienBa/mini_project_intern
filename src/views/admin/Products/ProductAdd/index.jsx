import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { adminServices } from '../../../../services/adminServices'
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaFormProduct } from '../../../../utils/validations/index'
import { useForm, Controller } from "react-hook-form"
import { SweetAlertSuccess, SweetAlertWarning } from '../../../../utils/SweetAlert'
import { editorConfig } from '../../../../utils/settings'
import { useDispatch } from 'react-redux'
import ReactQuill, { Quill } from 'react-quill';
import authSlice from '../../../auth/authSlice'

export default function ProductAdd() {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [urlImages, setUrlImages] = useState([])
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        active: true,
        file: []
    })
    const { t } = useTranslation()

    const { register, handleSubmit, control, setValue, clearErrors, formState: { errors } } = useForm({
        resolver: yupResolver(schemaFormProduct),
    });

    const handleInputImageChange = async (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        const { data } = await adminServices.uploadImageApi(formData)
        const fileName = e.target.files[0].name;
        data.name = fileName
        setUrlImages(prevState => {
            return [...prevState, data]
        })
    }

    const removeImageUrlFromList = (index) => {
        const newUrlImage = [...urlImages.slice(0, index), ...urlImages.slice(index + 1)];
        setUrlImages(newUrlImage)
    }

    const renderImagesList = () => {
        return urlImages.map((item, index) => {
            return <div className='relative h-auto max-w-[150px] text-center' key={index}>
                <button onClick={() => removeImageUrlFromList(index)} type="button" className="absolute right-1 top-1 bg-white rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img className='rounded-lg' src={`http://${item.url}`} alt='product' />
                <p>{item.name}</p>
            </div>
        })
    }

    const onSubmit = async (newProduct) => {
        newProduct.active = Boolean(newProduct.active)
        newProduct.images = []
        urlImages.forEach(item => {
            newProduct.images.push(item.url)
        })
        try {
            const { data } = await adminServices.addProductApi(newProduct)
            setProduct(newProduct)
            navigate('/admin/products')
            SweetAlertSuccess(t('add_product_success'))
        } catch (error) {
            if (error.message) {
                navigate('/login')
                dispatch(authSlice.actions.clearAccessToken())
                SweetAlertWarning(t('your_login_session_has_expired_please_login_again_to_continue'))
            }
        }
    };

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        <div className="w-full p-6 mx-auto">
            <div className="-mx-9">
                <div className="w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0 flex items-center justify-between">
                            <div className="flex items-center">
                                <p className="mb-0 dark:text-white/80">{t('add_product')}</p>
                            </div>
                        </div>
                        <div className="flex-auto p-6">
                            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="form flex flex-wrap -mx-3">
                                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">{t('name')}</label>
                                        <input type="text" id="name" name="name" defaultValue={product.name} className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" {...register("name", { required: true })} />
                                        {errors.name && <p className="text-red-500 italic error-message">{t(errors.name.message)}</p>}
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                    <div className="mb-4">
                                        <label htmlFor="price" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">{t('price')}</label>
                                        <input type="text" id="price" name="price" defaultValue={product.price} className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" {...register("price", { required: true })} />
                                        {errors.price && <p className="text-red-500 italic error-message">{t(errors.price.message)}</p>}
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                                    <div className="mb-4">
                                        <label htmlFor="description" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">{t('description')}</label>
                                        <Controller
                                            name="description"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <ReactQuill
                                                    {...field}
                                                    theme={editorConfig.theme}
                                                    modules={editorConfig.modules}
                                                    formats={editorConfig.formats}
                                                    onChange={(value) => {
                                                        if (value !== '<p><br></p>') {
                                                            field.onChange(value);
                                                        } else {
                                                            field.onChange('');
                                                        }
                                                    }}
                                                />
                                            )}
                                        />
                                        {errors.description && <p className="text-red-500 italic error-message">{t(errors.description.message)}</p>}
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file">{t('product_image')}</label>
                                    <input
                                        className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none cursor-pointer" id="file"
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        multiple
                                        onChange={handleInputImageChange}
                                    />
                                    <figure className="my-2 flex gap-5 flex-wrap">
                                        {renderImagesList()}
                                    </figure>
                                </div>
                                <div className="w-full max-w-full px-3">
                                    <div className="mb-4">
                                        <button className="md:flex w-full md:w-auto ml-auto text-white border-0 py-2 px-6 focus:outline-none bg-gradient-to-tl bg-blue-500 rounded-lg hover:opacity-90" type="submit">{t('add')}</button>
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <div onClick={handleBackButtonClick} className="link cursor-pointer">
                                        <div className="link-icon rotate-180">
                                            <svg className="icon" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                            <svg className="icon" width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                            </svg>
                                        </div>
                                        <span className="mask">
                                            <div className="link-container">
                                                <span className="link-title1 title">{t('back')}</span>
                                                <span className="link-title2 title">{t('back')}</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
