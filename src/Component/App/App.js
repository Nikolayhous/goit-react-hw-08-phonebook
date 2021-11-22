import Container from '../Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Title from '../Title';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Container>
            <ToastContainer />
            <Welcome />
            <Title titleText="Phonebook" />
            <ContactForm />
            <Filter />
            <ContactList />
            <Footer />
        </Container>
    );
}

export default App;
