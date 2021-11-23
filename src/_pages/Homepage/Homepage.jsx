import s from './Homepage.module.css';
import Title from '../../Component/Title';
import Welcome from '../../Component/Welcome';

const HomePage = () => {
    return (
        <div className={s.content}>
            <Title titleText="Phonebook" />
            <Welcome />
        </div>
    );
};

export default HomePage;
