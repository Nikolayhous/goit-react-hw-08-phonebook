import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/selector';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { deleteContact } from '../../redux/phonebook/operations';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    const totalNumber = contacts.length;

    // const onDeleteContact = id => {
    //     dispatch(deleteContact(id));
    //     toast.success('Contact delete');
    // };

    return (
        <div className={s.contactList}>
            <p className={s.total__number}>Your contacts:{totalNumber}</p>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(({ name, number, id }) => (
                        <tr key={id}>
                            <td></td>
                            <td>{name}</td>
                            <td>{number}</td>
                            <td>
                                <button
                                    className={s.btn}
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            deleteContact(
                                                id,
                                                toast.success(
                                                    `Contact ${name} ${number} delete`,
                                                ),
                                            ),
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

ContactList.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
};

export default ContactList;
