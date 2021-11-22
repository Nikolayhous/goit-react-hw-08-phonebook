import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer';
import Welcome from '../Welcome';
import HeaderNavigation from '../HeaderNavigation';

const HomePage = lazy(() => import('../../_pages/Homepage'));
const Contacts = lazy(() => import('../../_pages/Contactspage'));
const Login = lazy(() => import('../../_pages/Loginpage'));
const Register = lazy(() => import('../../_pages/Registerpage'));

function App() {
    return (
        <>
            <HeaderNavigation />
            <Suspense fallback={'loading...'}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Suspense>
            <Footer />
            <ToastContainer />
            <Welcome />
        </>
    );
}

export default App;
