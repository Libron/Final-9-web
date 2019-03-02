import React from 'react';
import './ContactInfo.css';

const ContactInfo = (props) => {
    if (!props.contact) {
        return <h1>No information about requested contact data</h1>;
    }
    return (
        <div className="ContactInfo">
            <div>
                <img src={props.contact.avatar} alt={props.contact.firstname} />
            </div>
            <div className="info">
                <p>Fullname: <span>{props.contact.firstname + ' ' + props.contact.lastname}</span></p>
                <p>Phone number: <span>{props.contact.phone}</span></p>
                <p>Email: <span>{props.contact.email}</span></p>
            </div>
        </div>
    );
};

export default ContactInfo;