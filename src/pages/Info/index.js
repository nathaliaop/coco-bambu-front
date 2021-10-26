import React, { useState, useEffect } from 'react';
import { Container, Label } from './styles';
import api from '../../services/api';

const Info = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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

    return (
        <Container>
            <Label>Seu nome é { name }</Label>
            <Label>Seu email é { email }</Label>
        </Container>
    );
    
}

export default Info;