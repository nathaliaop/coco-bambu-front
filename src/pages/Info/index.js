import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { Container, Label } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const Info = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let history = useHistory();

    useEffect(() => {
        api.get('/users/' + localStorage.getItem('id'), {
            headers: {
                Authorization : localStorage.getItem('token') 
            },
        })
        .then((response) => {
            setName(response.data.name)
            setEmail(response.data.email)
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }, [])

    const logout = async (e) => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <Container>
            <Label>Seu nome é { name }</Label>
            <Label>Seu email é { email }</Label>
            <Button onClick={ logout }>Sair do sistema</Button>
        </Container>
    );
    
}

export default Info;