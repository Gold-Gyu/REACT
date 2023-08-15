// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
