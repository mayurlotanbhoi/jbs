
import React, { useEffect, useState, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './common/Loader';
import routes from './Routes/routes';
import ProtectedRoute from './Routes/ProtectedRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import { PublicHeader } from './pages/Landing/componats/Header.componats';
import DefaultLayout from './layout/DefaultLayout';
import { useReAuthQuery } from './services/auth-service';
import { logOut, setCredentials } from './redux/auth/authSlice';
import { setToken } from './util/localStorage';
// import { PublicHeader } from "./pages/Landing/componats/Header.componats.jsx"

function App() {
  const { data: authResponse, isLoading, error, refetch } = useReAuthQuery();
  // const [isAuthenticated, setisAuthenticated] = useState(false)
  const isAuthenticated = useSelector((state) => state.auth.isLogin);
  // const isLogin = useSelector((state) => state.auth.isLogin);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log('isLoading', isLoading)
  // console.log("isAuthenticated", isAuthenticated)

  // useLayoutEffect(() => {
  //   setisAuthenticated(isLogin)
  // }, [authResponse, isLoading, error, isLogin])
  // useEffect(() => {
  //   window.location.reload();
  // }, [])


  useEffect(() => {

    if (!isLoading && authResponse?.success) {
      if (authResponse?.success) {
        const { accessToken, user } = authResponse.data;
        console.log("accessToken, user", accessToken, user)
        dispatch(setCredentials({ accessToken, user }));
        setToken(accessToken)
        console.log("isAuthenticated app", isAuthenticated)
        navigate('/dashboard')
      } else {
        dispatch(logOut());
        navigate('/');
      }
    }

    if (error) {
      console.error("ReAuth error:", error);
      dispatch(logOut());
      navigate('/');
    }

  }, [authResponse, isLoading, error]);

  useEffect(() => {
    // Scroll to top on location change
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) {
    return <Loader />;
  }








  const renderRoutes = (routesArray) => {
    return routesArray.map((route, index) => {
      // Handle routes with children (nested routes)
      if (route.children) {
        return (
          <Route path={route.path} key={index}>
            {route.protected ? (
              <>

                <ProtectedRoute roles={route.roles} >
                  {renderRoutes(route.children)}
                </ProtectedRoute>

              </>
            ) : (
              renderRoutes(route.children)
            )}
          </Route>
        );
      }

      // Handle routes without children
      const element = route.protected ? (
        <>
          {/* <Header /> */}
          <DefaultLayout >
            <ProtectedRoute roles={route.roles} >
              {/* <PageTitle title={route.title} /> */}
              {route.element}
            </ProtectedRoute>
            <Footer />
          </DefaultLayout>
        </>
      ) : (
        <><PublicHeader />
          {/* <PageTitle title={route.title} /> */}
          {route.element}
        </>
      );

      // Render the route
      return <Route path={route.path} element={element} key={index} />;
    });
  };

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {renderRoutes(routes)}
        {/* Redirect to login if not authenticated */}
        {/* <Route
          path="/"
          element={!isAuthenticated ? <Navigate to="/auth/signin" replace /> : <Navigate to="/dashboard" replace />}
        /> */}
      </Routes>


    </Suspense>
  );
}

export default App;























