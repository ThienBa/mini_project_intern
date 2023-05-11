export const selectLoadingVisible = (state) => state.auth.loadingVisible
export const selectIsRememberMe = (state) => state.auth.isRememberMe
export const selectAccessToken = (state) => state.auth.accessToken

export const selectProductsList = (state) => state.products.productList
export const selectPaginationProductList = (state) => state.products.pagination
export const selectLoadingSkeletonVisible = (state) => state.products.loadingSkeletonVisible

export const selectSidebarShow = (state) => state.responsive.sidebarShow

export const selectCurrentLanguage = (state) => state.settings.language
export const selectIsDarkTheme = (state) => state.settings.isDarkTheme
