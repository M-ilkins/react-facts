import React from 'react';
import reactLogo from '../../images/Group.png';
import reactText from '../../images/ReactFacts.png';
import styles from '../../../src/style.css';

export default function Navbar(){
    return (
        <nav>
            <img src={reactLogo} className="react-logo"></img>
            <img src={reactText} className="react-logo-text"></img>
            <h3>React Course - Project 1</h3>
        </nav>
    )
};