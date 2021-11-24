import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

import { getIsAuth } from '../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component }) => {
    const isAuth = useSelector(getIsAuth);
    return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
