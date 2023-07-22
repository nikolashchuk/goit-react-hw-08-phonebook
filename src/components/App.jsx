import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import Layout from './Layout/Layout';
const Home = lazy(() => import('./Home/Home'));
const AuthenticationPage = lazy(() => import('../pages/AuthenticationPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Home />} />
            }
          />

          <Route path="authentication" element={<AuthenticationPage />}>
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
          </Route>

          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/authentication/login"
                component={<ContactsPage />}
              />
            }
          />
        </Route>
      </Routes>
    )
  );
}
