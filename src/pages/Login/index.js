import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Form } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página

        api.post('/login', {
            email: email,
            password: password,
        })
        .then((response) => {
            alert('Login efetuado com sucesso!');
            const token = response.data.token;
            const id = response.data.user.id;
            const name = response.data.user.name;
            const is_admin = response.data.user.is_admin;
            localStorage.setItem('token', token);
            localStorage.setItem('is_admin', is_admin);
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            { is_admin ? history.push('/users') : history.push('/info') }
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }

    return (
        <Container>
            <Form>
                <Input value={ email } onChange={ setEmail } type='text'>Email</Input>
                <Input value={ password } onChange={ setPassword } type='password'>Password</Input>
                <Button onClick={ sendMessage }>Login</Button>
            </Form>
        </Container>
    );
}

export default Login;