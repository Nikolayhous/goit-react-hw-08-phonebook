import s from './Register.module.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../redux/auth/auth-operations';
import { getIsAuth } from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);

            case 'email':
                return setEmail(value);

            case 'password':
                return setPassword(value);

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchRegister({ name, email, password }));
        reset();
    };

    const reset = () => {
        setName('');
        setPassword('');
        setEmail('');
    };
    return (
        !isAuth && (
            <div className={s.content}>
                <h2 className={s.title}>Please register</h2>
                <Form onSubmit={handleSubmit} className={s.form}>
                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                    >
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalEmail"
                    >
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalPassword"
                    >
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password"
                                minlength="8"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalCheck"
                    >
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    );
};

export default RegisterPage;
