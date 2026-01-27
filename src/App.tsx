import { Suspense } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { ComponentType } from 'react'


import { routes } from './routes' 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

interface RouteType {
    path: string;
    element: ComponentType
    name?: string;
}

function App() {


  const renderRoutes = (routesArray: RouteType[]) => {
    return routesArray.map((route) => {
      return <Route key={route.path} path={route.path} element={<route.element />} />;
    })
  }

  return (
    
    <Router>
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Header />
        <Routes>{renderRoutes(routes)}</Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
