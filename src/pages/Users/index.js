import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { Container, Label } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    let history = useHistory();


    const sendMessage = async (e) => {
        history.push('/register')
    }

    useEffect(() => {
        api.get('/users', {
            headers: {
                Authorization : localStorage.getItem('token') 
            },
        })
        .then((response) => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }, [])

    return (
        <>
        {users ? (
            users.map(user =>
            <Container>
                <Label>O nome é { user.name }</Label>
                <Label>O email é { user.email }</Label>
            </Container>
          )
        ) : (
          <h1>Carregando!</h1>
        )
        }
        <Button onClick={ sendMessage }>Cadastrar novo usuario</Button>
        </>
    );
}

export default Users;