import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HeaderNavigation from '../HeaderNavigation';
import Footer from '../Footer';
import Loader from '../Loader';

const HomePage = lazy(() => import('../../_pages/HomePage'));
const ContactsPage = lazy(() => import('../../_pages/ContactsPage'));
const LoginPage = lazy(() => import('../../_pages/LoginPage'));
const RegisterPage = lazy(() => import('../../_pages/RegisterPage'));
const NotFoundView = lazy(() => import('../../_pages/NotFoundView'));

function App() {
    return (
        <>
            <HeaderNavigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/error" element={<NotFoundView />} />
                    {/* <Navigate to="/error" /> */}
                </Routes>
            </Suspense>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
