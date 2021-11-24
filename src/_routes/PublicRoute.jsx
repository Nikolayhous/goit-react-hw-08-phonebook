import { Navigate } from 'react-router';

const PublicRoute = ({ isAuth, component: Component }) => {
    return <>{isAuth ? <Navigate to="/" /> : <Component />}</>;
};

export default PublicRoute;
