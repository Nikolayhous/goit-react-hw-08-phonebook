import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/auth-selectors';

const PublicRoute = ({ component: Component }) => {
    const isAuth = useSelector(getIsAuth);
    const restricted = false;
    const Redirect = isAuth && restricted;
    return <>{Redirect ? <Navigate to="/" /> : <Component />}</>;
};

export default PublicRoute;
