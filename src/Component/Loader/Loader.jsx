import s from './Loader.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderSpinner = () => {
    return (
        <div className={s.LoaderContainer}>
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={5000} //3 secs
            />
        </div>
    );
};

export default LoaderSpinner;
