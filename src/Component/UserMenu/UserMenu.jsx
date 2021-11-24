import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from './avatar.jpg';
import { fetchLogOut } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const avatar = defaultAvatar;

    return (
        <div className={s.logout}>
            <img src={avatar} alt="avatar" width="32" className={s.img} />
            <span className={s.text}>welcome, {name}</span>
            {/* <button>Logout</button> */}
            <button
                type="button"
                className={s.btn}
                onClick={() => dispatch(fetchLogOut())}
            >
                Logout
            </button>
        </div>
    );
};

export default UserMenu;
