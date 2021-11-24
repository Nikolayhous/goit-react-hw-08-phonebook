import s from './Homepage.module.css';
import Title from '../../Component/Title';
import Welcome from '../../Component/Welcome';

const HomePage = () => {
    return (
        <div className={s.content}>
            <Title titleText="Phonebook" />
            <p className={s.text}>
                An easy way to create and store contacts. Before starting work
                please log in or sign up.
            </p>
            <Welcome />
        </div>
    );
};

export default HomePage;
