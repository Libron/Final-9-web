import React from 'react';
import {Button} from "reactstrap";
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <NavLink to="/">
                <h2>Contacts List / Адресная Книга</h2>
            </NavLink>
            <NavLink to="/add-contact">
                <Button color="success" >Add New Contact</Button>
            </NavLink>

        </header>
    );
};

export default Header;