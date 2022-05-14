
import NotFound from '../../Pages/NotFound';
import Application from '../../Pages/Dashboard/Quiz-List';

export default () => [
  {
    path: '/',
    exact: true,
    component: Application,
    error: 'Custom error for home page',
    meta: {
      authOnly: true
    }
  },
  {
    path: '/Dashboard',
    exact: true,
    component: Application,
    meta: {
      adminOnly: true // @TODO set to true
    }
  },
  {
    path: '*',
    component: NotFound,
    ignoreGlobal: true
  }
];