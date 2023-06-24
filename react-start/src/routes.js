import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import ShowPage from './pages/ShowPage';
import AdminPage from './pages/AdminPage';

// routes를 할 때는 순서가 중요하다
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
      path: "/admin",
      component: AdminPage 
    },
    {
      path: "/blogs/create",
      component: CreatePage
    },
    {
      path: "/blogs/:id/update",
      component: UpdatePage
    },
    {
      path: "/blogs/:id",
      component: ShowPage
    },
  ]

export default routes;