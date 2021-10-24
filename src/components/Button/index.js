import React from 'react';
import * as Styled from './styles.js';

const Button = ({ children, onClick }) => {
    return (
        <Styled.Button onClick={ onClick }>
            { children }
        </Styled.Button>
    );
}

export default Button;