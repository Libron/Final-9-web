import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";
import {connect} from "react-redux";
import {addContact} from "../../store/actions/action";

import './AddPage.css';

const AddPage = (props) => {
    return (
        <div className="AddPage">
            <h3 className="title">Add New Contact</h3>
            <ContactForm
                submit={props.addContact}
                history={props.history}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addContact: (id, contactData, history) => dispatch(addContact(contactData, history)),
    }
};

export default connect(null, mapDispatchToProps)(AddPage);