import s from './NotFoundView.module.css';

const NotFoundView = () => {
    return (
        <>
            <h1 className={s.title}>404 Page not found! </h1>
            <p className={s.text}>🤦</p>
        </>
    );
};

export default NotFoundView;
