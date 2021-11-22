import Container from '../Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Footer from '../Footer';
import Welcome from '../Welcom';
import Title from '../Title';

function App() {
    return (
        <Container>
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
