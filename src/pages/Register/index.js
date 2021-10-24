import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Form } from './styles';
import api from '../../services/api';
//import { useHistory } from 'react-router-dom';

const Register = () => {
    /*const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    let history = useHistory();*/

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página

        api.get('auth/linkedin/callback')
        .then((response) => {
            alert('Login efetuado com sucesso!');
            console.log(response)
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }

        return(<button onClick={sendMessage}>login</button>)

    /*return (
        <Container>
            <Form>
                <Input password={ name } value={ value } onChange={ e => onChange(e.target.value) } type='text'>Nome</Input>
                <Input password={ email } value={ value } onChange={ e => onChange(e.target.value) } type='text'>Email</Input>
                <Input password={ password } value={ value } onChange={ e => onChange(e.target.value) } type='password'>Password</Input>
                <Input password={ password } value={ value } onChange={ e => onChange(e.target.value) } type='password'>Password confirmation</Input>
                <Button>Cadastrar</Button>
            </Form>
        </Container>
    );*/
}

export default Register;