import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer';
import Loader from '../Loader';
import Container from '../Container';
import PrivateRoute from '../../_routes/PrivatePublic';
import PublicRoute from '../../_routes/PublicRoute';
import AppBar from '../AppBar/AppBar';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { getIsAuth } from '../../redux/auth/auth-selectors';

const HomePage = lazy(() => import('../../_pages/HomePage'));
const ContactsPage = lazy(() => import('../../_pages/ContactsPage'));
const LoginPage = lazy(() => import('../../_pages/LoginPage'));
const RegisterPage = lazy(() => import('../../_pages/RegisterPage'));
const NotFoundView = lazy(() => import('../../_pages/NotFoundView'));

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        <>
            <AppBar />
            <Container>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route
                            path="/"
                            element={<PublicRoute component={HomePage} />}
                        />
                        <Route
                            path="/contacts"
                            element={
                                <PrivateRoute
                                    isAuth={isAuth}
                                    component={ContactsPage}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute
                                    isAuth={isAuth}
                                    component={LoginPage}
                                />
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute
                                    isAuth={isAuth}
                                    component={RegisterPage}
                                />
                            }
                        />
                        <Route path="/*" element={<NotFoundView />} />
                    </Routes>
                </Suspense>
            </Container>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
