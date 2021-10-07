import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

const Button = (props) => {
const {path, name}=props;

    return (
        <>
            <Link to={path}>

                <button className='btn'>{name}</button>

            </Link>

        </>
    )
}

export default Button;