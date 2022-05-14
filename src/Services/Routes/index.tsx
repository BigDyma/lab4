
import NotFound from '../../Pages/NotFound';
import CreateUser from '../../Pages/Dashboard/CreateUser';
import Application from '../../Pages/Dashboard/Home';
import QuizDetailsApp from '../../Pages/Dashboard/Quiz-Details';
import QuizTakeApp from '../../Pages/Quiz-Take';


export default () => [
  {
    path: '/',
    exact: true,
    component: Application,
    error: 'Custom error for home page'
  },
  {
    path: '/Quizzes',
    exact: true,
    component: Application,
    meta: {
      adminOnly: true // @TODO set to true
    }
  },
  {
    path: '/Quiz/:id',
    exact: true, 
    component: QuizDetailsApp,
  },
  {
      path: '/Quiz/take/:id',
      exact: true,
      component: QuizTakeApp
  },
  {
      path: '/CreateUser',
      exact: true,
      component: CreateUser, 
      meta: {
          adminOnly: false
      }
  },
  {
    path: '*',
    component: NotFound,
    ignoreGlobal: true
  }
];