import { Navigate } from 'react-router-dom';

const PublicRoute = ({ isAuth, component: Component }) => {
    return <>{isAuth ? <Navigate to="/" /> : <Component />}</>;
};

export default PublicRoute;
