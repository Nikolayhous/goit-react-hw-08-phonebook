import s from './AppBar.module.css';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/auth-selectors';

const AppBar = () => {
    const isAuth = useSelector(getIsAuth);
    return (
        <header className={s.header}>
            <Navigation />
            {isAuth ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;
