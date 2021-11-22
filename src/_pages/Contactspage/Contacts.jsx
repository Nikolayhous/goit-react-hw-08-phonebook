import Container from '../../Component/Container';
import ContactForm from '../../Component/ContactForm';
import Filter from '../../Component/Filter';
import ContactList from '../../Component/ContactList';
import Title from '../../Component/Title';

const Contacts = () => {
    return (
        <Container>
            <Title titleText="Phonebook" />
            <ContactForm />
            <Filter />
            <ContactList />
        </Container>
    );
};

export default Contacts;
