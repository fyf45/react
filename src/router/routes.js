import ReactLoadable from 'react-loadable';
import LoadingPage from '../components/loadingPage';

const routes = [
    {path: '/', component: () => import('../pages/home/index')},
    {path: '/mine', component: () => import('../pages/mine/index')},
    {path: '/counter', component: () => import('../pages/counter/index')},
];

export default routes.map(item => {
    return {
        path: item.path,
        component: ReactLoadable({loader: item.component, loading: LoadingPage}),
    };
});
