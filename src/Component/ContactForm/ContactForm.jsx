import { useState } from 'react';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook/selector';
import { addContact } from '../../redux/phonebook/operations';
import { toast } from 'react-toastify';

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [agree, setAgree] = useState(false);

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const comparableContact = contacts.some(
            el => el.name.toLowerCase() === name.toLowerCase(),
        );
        if (comparableContact) {
            return alert(`Contact ${name} has already been added to the list`);
        }
        dispatch(addContact({ name, number }));
        resetForm();
        toast.success(`Add contact ${name} ${number} `);
    };

    const handleAgreeChange = e => {
        setAgree(e.target.checked);
    };

    const resetForm = () => {
        setName('');
        setNumber('');
        setAgree(false);
    };

    return (
       
        <div className={s.section__form}>
            <form className={s.form} onSubmit={handleSubmit}>
                <h3 className={s.titleForm}>
                    In this form you can add a contacts number.
                </h3>
                <div className={s.generalBoxInputs}>
                    <label className={s.label}>
                        Name
                        <input
                            className={s.inputName}
                            value={name}
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
                            title="?????? ?????????? ???????????????? ???????????? ???? ????????, ??????????????????, ???????? ?? ????????????????. ???????????????? Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ?? ??. ??."
                            required
                            onChange={handleChange}
                        />
                    </label>

                    <label className={s.label}>
                        Number
                        <input
                            className={s.inputName}
                            type="tel"
                            value={number}
                            name="number"
                            placeholder="Enter number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="?????????? ???????????????? ???????????? ???????????????? ???????? ?? ?????????? ?????????????????? ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +"
                            required
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label className={s.label__agree}>
                    <input
                        className={s.checkbox}
                        value={agree}
                        type="checkbox"
                        name="agree"
                        checked={agree}
                        onChange={handleAgreeChange}
                    />
                    agree
                </label>

                <button className={s.btn} disabled={!agree}>
                    Add contact
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
