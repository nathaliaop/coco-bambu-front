import React from 'react';
import * as Styled from './styles.js';

const Input = ({ children, value, onChange, password=false, ...props }) => {

    return (
        <Styled.Input>
            <input password={password} value={value} onChange={e => onChange(e.target.value)} type={password ? 'password' : 'text'} required {...props}/>
            <span>{ children }</span>
        </Styled.Input>
    );
}

export default Input