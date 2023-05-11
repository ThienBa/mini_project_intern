import { createBrowserRouter } from "react-router-dom";
import Error from "../views/admin/Error";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import AdminLayout from "../layouts/Admin";
import Products from "../views/admin/Products";
import Dashboard from "../views/admin/Dashboard";
import Profile from "../views/admin/Profile";
import Setting from "../views/admin/Setting";
import AuthLayout from "../layouts/Auth";
import ProductDetails from "../views/admin/Products/ProductDetails";
import ProductEdit from "../views/admin/Products/ProductEdit";
import ProductAdd from "../views/admin/Products/ProductAdd";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout Component={Login} />,
        errorElement: <Error />
    },
    {
        path: "/dashboard",
        element: <AdminLayout Component={Dashboard} />,
        errorElement: <Error />
    },
    {
        path: "/admin/products",
        element: <AdminLayout Component={Products} />,
        errorElement: <Error />
    },
    {
        path: "/admin/edit/:id/product",
        element: <AdminLayout Component={ProductEdit} />,
        errorElement: <Error />
    },
    {
        path: "/admin/add/product",
        element: <AdminLayout Component={ProductAdd} />,
        errorElement: <Error />
    },
    {
        path: "/admin/:id/product",
        element: <AdminLayout Component={ProductDetails} />,
        errorElement: <Error />
    },
    {
        path: "/admin/profile",
        element: <AdminLayout Component={Profile} />,
        errorElement: <Error />
    },
    {
        path: "/admin/setting",
        element: <AdminLayout Component={Setting} />,
        errorElement: <Error />
    },
    {
        path: "/login",
        element: <AuthLayout Component={Login} />,
        errorElement: <Error />
    },
    {
        path: "/register",
        element: <AuthLayout Component={Register} />,
        errorElement: <Error />
    },
    {
        path: "*",
        element: <Error />,
    },
]);