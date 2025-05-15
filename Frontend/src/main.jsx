import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import FindPostPage from './pages/FindPostPage.jsx';

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />, // Render the App component
  },
  {
    path: "/home",
    element: <MainPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/search",
    element: <FindPostPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>,
)
