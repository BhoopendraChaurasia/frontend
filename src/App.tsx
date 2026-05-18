import { Suspense, type ReactNode } from 'react'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes' 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import RootLoader from "./components/common/RootLoader";
import Loader from "./components/common/Loader";
import type { RouteType } from "./features/types/common";


function App() {

  const renderRoutes = (routesArray: RouteType[]) => {
    return routesArray.map((route) => {

      const { Component, element, path, children, middleware } = route;      

      let renderedElement: ReactNode;

      if (element) {
        renderedElement = element;
      } else if (Component) {
        renderedElement = <Component />;
      } 
      else {
        renderedElement = null;
      }

      if (middleware?.length && renderedElement) {
        renderedElement = middleware.reduceRight<ReactNode>(
          (acc, mw) => mw(acc),
          renderedElement
        );
      }

      return (
        <Route key={path} path={path} element={renderedElement}>
          {children && renderRoutes(children)}
        </Route>
      );

    });
  };

  return (
    
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center mt-20 min-h-screen flex items-center justify-center"><RootLoader /></div>}>
        <Header />
          <Suspense fallback = {< Loader />}>
            <Routes>{renderRoutes(routes)}</Routes>
          </Suspense>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
