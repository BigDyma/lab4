
import NotFound from '../../Pages/NotFound';
import CreateUser from '../../Pages/Dashboard/CreateUser';
import Application from '../../Pages/Dashboard/Home';
import QuizTakeApp from "../../Pages/Quiz-Take";

export default () => [
  {
    path: '/',
    exact: true,
    component: Application,
    error: 'Custom error for home page'
  },
  {
    path: '/quizzes',
    exact: true,
    component: Application,
  },
  {
    path: '/quiz/:id',
    exact: true, 
    component: QuizTakeApp,
  },
  {
      path: '/quiz/take/:id',
      exact: true,
      component: QuizTakeApp
  },
  {
      path: '/createUser',
      exact: true,
      component: CreateUser, 
  },
  {
    path: '*',
    component: NotFound,
    }
];