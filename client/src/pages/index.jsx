import { lazy } from 'react'

export const Home = lazy(() => import('./Home/Home'))
export const Cart = lazy(() => import('./Cart/Cart'))
export const ErrorPage = lazy(() => import('./ErrorPage/ErrorPage'))
export const ProductList = lazy(() => import('./ProductList/ProductList'))
export const Product = lazy(() => import('./Product/Product'))
export const Layout = lazy(() => import('./Layout/Layout'))
export const Checkout = lazy(() => import('./Checkout/Checkout'))