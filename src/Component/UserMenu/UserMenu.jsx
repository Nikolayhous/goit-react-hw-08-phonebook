import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import defaultAvatar from './avatar.jpg';
import { fetchLogOut } from '../../redux/auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);
    const avatar = defaultAvatar;

    return (
        <>
            <img src={avatar} alt="avatar" width="32" />
            <span>welcome, {name}</span>
            {/* <button>Logout</button> */}
            <button type="button" onClick={() => dispatch(fetchLogOut())}>
                Logout
            </button>
        </>
    );
};

export default UserMenu;
