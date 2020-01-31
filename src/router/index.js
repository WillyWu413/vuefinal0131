import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/manager/Dashboard';
import Login from '@/components/manager/pages/Login';
import Products from '@/components/manager/pages/Products';
import CustomerOrder from '@/components/manager/pages/CustomerOrders';
import CustomerCheckout from '@/components/manager/pages/CustomerCheckout';
import Coupons from '@/components/manager/pages/Coupons';
import Orders from '@/components/manager/pages/Orders';
import Home from '@/components/customer/Home';
import Store from '@/components/customer/store';
import Product from '@/components/customer/pages/product';
import Detail from '@/components/customer/pages/detail' ;
import Orderinfor from '@/components/customer/pages/order_infor';
import Ordername from '@/components/customer/pages/order_name';
import Ordercheckout from '@/components/customer/pages/order_checkout';
import Checkout from '@/components/customer/pages/checkout';

Vue.use(VueRouter);


export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/store',
            name: 'Store',
            component: Store,
            children:[
                {
                    path: '',
                    name: 'Product',
                    component: Product,
                },
                {
                    path: 'detail/:itemId',
                    name: 'Detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
            children:[
            {
                path: '',
                name: 'orderinfor',
                component: Orderinfor,
            },
            {
                path: 'order_name',
                name: 'ordername',
                component: Ordername,
            },
            {
            path: 'order_checkout/:orderId',
            name: 'ordercheckout',
            component: Ordercheckout,
            },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            name: 'Dashboard',
            path: '/admin',
            component: Dashboard,
            children: [
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'coupons',
                    name: 'Coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders,
                    meta: { requiresAuth: true },
                },
            ],
        },
        {
            name: 'admin',
            path: '/admin',
            component: Dashboard,
            children: [
                {
                    path: 'customer_order',
                    name: 'CustomerOrder',
                    component: CustomerOrder,
                },
                {
                    path: 'customer_checkout/:orderId',
                    name: 'CustomerCheckout',
                    component: CustomerCheckout,
                },
            ],
        },
    ],
});