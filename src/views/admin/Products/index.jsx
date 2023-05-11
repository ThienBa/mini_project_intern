import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { adminServices } from '../../../services/adminServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectLoadingSkeletonVisible, selectPaginationProductList, selectProductsList } from '../../../redux/selectors'
import { SweetAlertWarning } from '../../../utils/SweetAlert'
import productSlice, { getListProductApiAction } from './productSlice'
import numeral from 'numeral'
import ReactPaginate from 'react-paginate'
import authSlice from '../../auth/authSlice'
import LoadingSkeleton from '../../../components/LoadingSkeleton/Index'
import _ from 'lodash'
import './Products.css'

export default function Products() {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [valueSort, setValueSort] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortType, setSortType] = useState('');
    const [active, setActive] = useState("true");
    const [isfirstLoading, setIsfirstLoading] = useState(true)
    const loadingSkeletonVisible = useSelector(selectLoadingSkeletonVisible)
    const { totalItem, currentPage, limit, } = useSelector(selectPaginationProductList)
    const productsList = useSelector(selectProductsList)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const debouncedSearch = _.debounce(() => {
        dispatch(getListProductApiAction({ currentPage, limit, searchTerm, sortBy, sortType, active })).catch((error) => {
            if (error.message) {
                navigate('/login')
                dispatch(authSlice.actions.clearAccessToken())
                SweetAlertWarning(t('your_login_session_has_expired_please_login_again_to_continue'))
            }
        })
    }, 1000)

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handlePageChange = (selectedPage) => {
        dispatch(productSlice.actions.setCurrentPage(selectedPage.selected + 1))
    }

    const handleChangeSortBy = (e) => {
        const [sortBy, sortType] = e.target.value.split(" ");
        setValueSort(e.target.value)
        setSortBy(sortBy)
        setSortType(sortType)
    }

    const handleActiveChange = (e) => {
        setActive(e.target.value)
    }

    const handleClearFilterSearch = () => {
        setSearchTerm('')
        setValueSort('')
        setSortBy('')
        setSortType('')
        setActive("true")
        dispatch(productSlice.actions.setCurrentPage(1))
    }

    useEffect(() => {
        return () => {
            dispatch(productSlice.actions.setCurrentPage(1))
        }
    }, [])


    useEffect(() => {
        setIsfirstLoading(false)
        debouncedSearch()
    }, [currentPage, limit, searchTerm, sortBy, sortType, active])

    useEffect(() => {
        (async function () {
            setIsfirstLoading(true)
            dispatch(productSlice.actions.setLoadingSkeleton(true))
            await dispatch(getListProductApiAction({ currentPage, limit, active })).catch((error) => {
                if (error.message) {
                    navigate('/login')
                    dispatch(authSlice.actions.clearAccessToken())
                    SweetAlertWarning(t('your_login_session_has_expired_please_login_again_to_continue'))
                }
            })
            dispatch(productSlice.actions.setLoadingSkeleton(false))
        })()
    }, [])

    const renderProducstList = () => {
        if (productsList.length > 0) {
            return productsList.map(product => {
                const date = new Date(product.createdAt)
                return (<tr key={product.id}>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                            {product.ProductImage.length > 0 ?
                                <img
                                    src={`http://${product.ProductImage[0]?.url}`}
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt={product.name}
                                />
                                :
                                <img
                                    src="../assets/img/product.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt={product.name}
                                />
                            }
                            <div className="flex flex-col justify-center">
                                <Link to={`/admin/${product.id}/product`} className="font-bold mb-0 text-sm leading-normal dark:text-white pr-10">{product.name.slice(0, 25) + (product.name.length > 25 ? '...' : '')}</Link>
                            </div>
                        </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{numeral(product.price).format('$0,0.00')}</p>
                    </td>
                    <td className="table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className={`${product.active ? 'bg-blue-500' : 'bg-gray-700'} to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline uppercase leading-none text-white`}>{product.active ? t('active') : t('inactive')}</span>
                    </td>
                    <td className="table-cell p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 date-created">
                            {date.toLocaleDateString('vi')}
                        </span>
                    </td>
                    <td className="table-cell p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <Link to={`/admin/edit/${product.id}/product`} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 text-dark-light text-light-black flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.7574 2.99666L14.7574 4.99666H5V18.9967H19V9.2393L21 7.2393V19.9967C21 20.5489 20.5523 20.9967 20 20.9967H4C3.44772 20.9967 3 20.5489 3 19.9967V3.99666C3 3.44438 3.44772 2.99666 4 2.99666H16.7574ZM20.4853 2.09717L21.8995 3.51138L12.7071 12.7038L11.2954 12.7062L11.2929 11.2896L20.4853 2.09717Z"></path></svg>
                        </Link>
                    </td>
                </tr>)
            })
        }
        else {
            if (!isfirstLoading) {
                return <tr>
                    <td colSpan="5" className='text-center italic text-yellow-200'>{t('no_products_found')}</td>
                </tr>
            }
        }
    }

    const renderPagination = () => {
        if (productsList.length > 0)
            return <ReactPaginate
                pageCount={Math.ceil(totalItem / limit)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                selectedPageRel={currentPage}
                previousLabel={t('previous')}
                nextLabel={t('next')}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
    }

    const renderTableProducts = () => {
        if (loadingSkeletonVisible)
            return <LoadingSkeleton />
        else
            return (<div>
                {productsList.length > 0 && <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent block md:flex items-center justify-between">
                    <h6 className="dark:text-white">{t('products_table')} -
                        ({currentPage}/{Math.ceil(totalItem / limit)} {t('pages')}) -
                        ({productsList.length}/{totalItem} {t('product').toLocaleLowerCase()})
                    </h6>
                    <Link to="/admin/add/product" className="rounded-lg justify-center dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-2 md:my-0 mx-0 md:mx-2 flex items-center whitespace-nowrap px-4 transition-colors active hover:opacity-95">{t('add_product')}</Link>
                </div>}
                <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">{t('product')}</th>
                                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">{t('price')}</th>
                                    <th className="table-cell px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">{t('status')}</th>
                                    <th className="table-cell px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">{t('created')}</th>
                                    <th className="table-cell px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">{t('actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderProducstList()}
                            </tbody>
                        </table>
                        {renderPagination()}
                    </div>
                </div>
            </div>)
    }

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-wrap items-center justify-between p-2 lg:mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start backdrop-saturate-200 backdrop-blur-2xl dark:bg-slate-850/80 dark:shadow-dark-blur bg-[hsla(0,0%,100%,0.8)] shadow-blur z-110">
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                    <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                        <FontAwesomeIcon icon="search" />
                    </span>
                    <input value={searchTerm} onChange={handleSearchTermChange} type="text" className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" placeholder={t('search_products_here')} />
                </div>
                <div className="relative block w-full ml-0 lg:ml-5 mt-2 lg:mt-0">
                    <select value={valueSort} onChange={handleChangeSortBy} className="dark:bg-slate-850 dark:text-white border border-solid border-gray-300 select w-full px-2 py-2 rounded-lg outline-none appearance-none">
                        <option disabled value=''>{t('sort_by')}</option>
                        <option value="name asc">{t('name')} {t('from')} A - Z</option>
                        <option value="name desc">{t('name')} {t('from')} Z - A</option>
                        <option value="price asc">{t('price')} {t('increase')}</option>
                        <option value="price desc">{t('price')} {t('decrease')}</option>
                        <option value="createdAt desc">{t('created_at')} {t('from_near_to_far')}</option>
                        <option value="createdAt asc">{t('created_at')} {t('from_far_to_near')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 14l-5-5h10l-5 5z" />
                        </svg>
                    </div>
                </div>
                <div className="relative block w-full ml-0 lg:ml-5 mt-2 lg:mt-0">
                    <select value={active} onChange={handleActiveChange} className="dark:bg-slate-850 dark:text-white border border-solid border-gray-300 select w-full px-2 py-2 rounded-lg outline-none appearance-none">
                        <option value="true">{t('active')}</option>
                        <option value="false">{t('inactive')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 14l-5-5h10l-5 5z" />
                        </svg>
                    </div>
                </div>
                <button onClick={handleClearFilterSearch} type="button" className="w-full lg:w-[30%] ml-0 lg:ml-5 mt-2 lg:mt-0 inline-flex right-3 top-3 text-white bg-gray-500 hover:bg-gray-600 rounded-lg items-center justify-center select-none p-2">
                    {t('clear_filter')}
                </button>
            </div>

            <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        {renderTableProducts()}
                    </div>
                </div>
            </div>
        </div>
    )
}
