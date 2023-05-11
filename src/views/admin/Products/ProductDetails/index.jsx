import { Link, useNavigate, useParams } from 'react-router-dom'
import { adminServices } from '../../../../services/adminServices'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";
import { SweetAlertWarning } from '../../../../utils/SweetAlert'
import { useDispatch } from 'react-redux'
import numeral from 'numeral'
import authSlice from '../../../auth/authSlice'
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReadMoreDescription from '../../../../components/ReadMoreDescription';

export default function ProductDetails() {
    const { t } = useTranslation()
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        active: true,
        ProductImage: []
    })

    useEffect(() => {
        (async function () {
            try {
                const { data } = await adminServices.getProductDetailsApi(id)
                setProduct(data)
            } catch (error) {
                if (error.message) {
                    navigate('/login')
                    dispatch(authSlice.actions.clearAccessToken())
                    SweetAlertWarning(t('your_login_session_has_expired_please_login_again_to_continue'))
                }
            }
        })()
    }, [])

    const renderDate = (dateFromBackend) => {
        const date = new Date(dateFromBackend)
        return date.toLocaleDateString('vi')
    }

    const renderImagesProductSlider = () => {
        return <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            zoom={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Zoom, Navigation, Pagination]}
            className="mySwiper xl:w-1/2"
        >
            {
                product.ProductImage.length > 0 ?
                    product.ProductImage.map(item => {
                        return <SwiperSlide key={item.id}>
                            <div className="swiper-zoom-container h-96">
                                <img src={`http://${item.url}`} />
                            </div>
                        </SwiperSlide>
                    }) :
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src='../../../assets/img/product.jpg' />
                        </div>
                    </SwiperSlide>
            }
        </Swiper>
    }

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        <div className="w-full p-6 mx-auto">
            <div className="-mx-9">
                <div className="w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 break-word text-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="button-wrapper justify-start">
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
                        <div className="body-font overflow-hidde text-white">
                            <div className="container px-5 py-10 mx-auto">
                                <div className="mx-auto">
                                    {renderImagesProductSlider()}
                                    <div className="w-full xl:pl-10 xl:py-6 mt-6 xl:mt-0">
                                        <h1 className="text-white text-3xl title-font font-medium mb-4">{product.name}</h1>
                                        <ReadMoreDescription description={product.description} />
                                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                            <div className="flex">
                                                <span className="mr-3 light-white">Active:</span>
                                                <button className={`border-2 ${product.active ? 'bg-green-500' : 'bg-gray-500'} border-gray-300 rounded-full w-6 h-6 focus:outline-none cursor-default`} />
                                            </div>
                                            <div className="flex ml-6 items-center">
                                                <span className="mr-3 light-white">{t("created_updated_at")}:</span>
                                                <p>{renderDate(product.createdAt)} - {renderDate(product.updatedAt)}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-white light-white">{numeral(product.price).format('$0,0.00')}</span>
                                            <Link to={`/admin/edit/${product.id}/product`} className="flex ml-auto active text-white border-0 py-2 px-6 focus:outline-none bg-gradient-to-tl bg-blue-500 rounded-lg hover:opacity-90">{t('edit')}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
