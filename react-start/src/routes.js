import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';

const routes = [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/blogs",
      component: ListPage
    },
    {
      path: "/blogs/create",
      component: CreatePage
    },
    {
      path: "/blogs/update",
      component: UpdatePage
    },
  ]

export default routes;