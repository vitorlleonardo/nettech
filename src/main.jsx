import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import App from './App.jsx'
import './styles/main.sass'
// Components
import Home from './pages/Home.jsx';
import Editor from './pages/Editor.jsx';
import Error from './pages/ErrorPage.jsx';
import Elementos from './pages/Elementos.jsx';
import Atributos from './pages/Atributos.jsx';
import Estilo from './pages/Estilo.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Editor',
        element: <Editor />
      },
      {
        path: '/Elementos',
        element: <Elementos />
      },
      {
        path: '/Atributos',
        element: <Atributos />
      },
      {
        path: '/Estilo',
        element: <Estilo />
      }
    ]
  }
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
