import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/" className={`${s.link} ${s.active}`}>
                        Home
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/contacts" className={`${s.link} ${s.active}`}>
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
