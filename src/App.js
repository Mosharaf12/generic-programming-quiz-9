
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import TopicsItems from './components/TopicsItems/TopicsItems';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          loader:async()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path:'/home',
          loader:async()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element:<Home></Home>

        },
        {
          path:'/topics/:topicsId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element: <Topics></Topics>
        },
        {
          path:'/topics',
          loader:async()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element:<TopicsItems></TopicsItems>

        },
        
    
        {
          path: '/statistics',
          loader:async()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
