import styled from 'styled-components'
import { useRoutes } from 'react-router-dom'

import HomePage from '@/views/pages/HomePage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
]

export const ScRouter = styled.div``

const Router = () => {
  const router = useRoutes(routes)
  return <ScRouter className="router">{router}</ScRouter>
}

export default Router
