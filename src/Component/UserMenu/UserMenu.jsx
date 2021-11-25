import { toast } from 'react-toastify';
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
            <span className={s.text}>Welcome {name}</span>
            <button
                type="button"
                className={s.btn}
                onClick={() =>
                    dispatch(
                        fetchLogOut(
                            toast.success(`You are signed out ${name}`),
                        ),
                    )
                }
            >
                Logout
            </button>
        </div>
    );
};

export default UserMenu;
