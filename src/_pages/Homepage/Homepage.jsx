import s from './Homepage.module.css';
import Title from '../../Component/Title';

const HomePage = () => {
    return (
        <div className={s.content}>
            <Title titleText="Phonebook" />
        </div>
    );
};

export default HomePage;
