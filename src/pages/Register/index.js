import React, { useState } from 'react';
//import ButtonMain from '../../components/Button';
//import * as Styled from './styles';
import api from '../../services/api';
//import { useHistory } from 'react-router-dom';

const Register = () => {
    /*const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    let history = useHistory();

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página
        
        // verifica se os campos estão todos preeenchidos
        if (email.length === 0 || senha.length === 0 ) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        
        // console.log(email);
        // console.log(senha);

        api.post('/login', {
            email: email,
            password: senha
        })
        .then((response) => {
            alert('Login efetuado com sucesso!');
            const token = response.data.token;
            const user_id = response.data.user.id;
            const user_name = response.data.user.name;
            const user_photo = response.data.user.photo;
            const user_isAdmin = response.data.user.is_admin;
            console.log(token);
            console.log(response.data);
            localStorage.setItem('token', token);
            localStorage.setItem('user_isAdmin', user_isAdmin);
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('user_name', user_name);
            localStorage.setItem('user_photo', user_photo);
            //localStorage.setItem('user_photo', user.photo);
            // limpa os campos preenchidos
            setEmail('');
            setSenha('');
            history.push('/');
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }*/


    return (
        <h1>Oi</h1>
    );
}

export default Register;