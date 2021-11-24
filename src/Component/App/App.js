import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router';
import HeaderNavigation from '../HeaderNavigation';
import Footer from '../Footer';
import Loader from '../Loader';
import Container from '../Container';
import PrivateRoute from '_routes/PrivatePublic';
import PublicRoute from '_routes/PublicRoute';
import AppBar from '../AppBar/AppBar';

const HomePage = lazy(() => import('../../_pages/HomePage'));
const ContactsPage = lazy(() => import('../../_pages/ContactsPage'));
const LoginPage = lazy(() => import('../../_pages/LoginPage'));
const RegisterPage = lazy(() => import('../../_pages/RegisterPage'));
const NotFoundView = lazy(() => import('../../_pages/NotFoundView'));

function App() {
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
                            element={<PrivateRoute component={ContactsPage} />}
                        />
                        <Route
                            path="/login"
                            element={<PublicRoute component={LoginPage} />}
                        />
                        <Route
                            path="/register"
                            element={<PublicRoute component={RegisterPage} />}
                        />
                        <Route path="/error" element={<NotFoundView />} />
                    </Routes>
                    {/* <Navigate to="/error" / */}>
                </Suspense>
            </Container>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
