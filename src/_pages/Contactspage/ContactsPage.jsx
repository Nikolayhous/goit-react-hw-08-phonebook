import ContactForm from '../../Component/ContactForm';
import Filter from '../../Component/Filter';
import ContactList from '../../Component/ContactList';
import Title from '../../Component/Title';
import s from './Contacts.module.css';

const ContactsPage = () => {
    return (
        <div className={s.contacts}>
            <Title titleText="Phonebook" />
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    );
};

export default ContactsPage;
