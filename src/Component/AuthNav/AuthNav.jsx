import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/login" className={`${s.link} ${s.active}`}>
                        Login
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/register" className={`${s.link} ${s.active}`}>
                        Register
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default AuthNav;
