import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDashboard, faList, faSignOut, faSearch, faBars, faGear } from '@fortawesome/free-solid-svg-icons'
import Loading from "./components/Loading"
import { useDispatch, useSelector } from "react-redux"
import { selectLoadingVisible } from "./redux/selectors"
import { useEffect } from "react"
import { setThemeAction } from "./redux/actions"
import { getThemeStorage } from "./utils/settings"

library.add([faUser, faDashboard, faList, faSignOut, faSearch, faBars, faGear])

function App() {
  const dispatch = useDispatch()
  const loadingVisible = useSelector(selectLoadingVisible)

  useEffect(() => {
    dispatch(setThemeAction(getThemeStorage()))
  }, [])


  return (
    <>
      {loadingVisible && <Loading />}
      <RouterProvider router={router} />
    </>
  )
}

export default App
