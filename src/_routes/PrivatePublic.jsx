import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component }) => {
    const isAuth = useSelector(getIsAuth);
    return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
