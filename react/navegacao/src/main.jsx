import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'

// importando as paginas
import Home from './pages/home'
import Page from './pages/page'

// construindo as rotas
const data = [
	{ path: '/', element: <Home /> },
	{ path: '/:slug', element: <Page /> },
]

// crriando a rota
const router = createBrowserRouter(data)

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
