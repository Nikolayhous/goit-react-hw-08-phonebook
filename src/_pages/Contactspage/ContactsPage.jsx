import ContactForm from '../../Component/ContactForm';
import Filter from '../../Component/Filter';
import ContactList from '../../Component/ContactList';
import Title from '../../Component/Title';
import s from './Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/phonebook/operations';

const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
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
