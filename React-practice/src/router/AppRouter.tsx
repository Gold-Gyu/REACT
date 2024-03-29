import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/Home/Home.tsx';
import BlogPage from 'pages/BlogPage/BlogPage';
import ErrorPage from 'pages/ETC/ErrorPage/ErrorPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';

const AppRouter = () => {
  return (
    <div className="app-router-route">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to={'/home'} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate replace to="/error" />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
