import React, {Component} from 'react';
import {connect} from "react-redux";
import {addContact, closeModal, deleteContact, fetchContacts, showContact} from "../../store/actions/action";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";

import './ContactPage.css';
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import {Button} from "reactstrap";

class ContactsPage extends Component {
    componentDidMount() {
        this.props.closeModal();
        this.props.fetchContacts();
    };

    render() {
        if (!this.props.contacts || this.props.loading) {
            return <Spinner />
        }

        const contacts = Object.keys(this.props.contacts).map(contactId => {
            const contact = this.props.contacts[contactId];
            const fullname = contact.firstname + ' ' + contact.lastname;

           return (
               <li
                   key={contactId}
                   className="item"
                   onClick={() => this.props.showContact(contactId, this.props.contacts[contactId])}
               >
                    <img src={contact.avatar} alt={fullname} className="avatar img-fluid"/>
                    <p className="fullname">{fullname}</p>
                </li>
           )});

        return (
            <div>
                <Modal
                    show={this.props.show}
                    close={this.props.closeModal}
                >
                    <ContactInfo contact={this.props.contact} />
                    <div className="ModalButtons">
                        <Button color="warning" onClick={() => this.props.history.push('contact/' + this.props.contact.id + '/edit')}>Edit</Button>
                        <Button color="danger" onClick={() => {
                            if (window.confirm('Вы точно хотите удалить ?')) {
                                return this.props.deleteContact(this.props.contact.id);
                            } else {
                                return this.props.closeModal();
                            }
                        }}>Delete</Button>
                    </div>
                </Modal>
                <ul className="ContactList">
                    {contacts}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        show: state.isActiveModal,
        contacts: state.contacts,
        contact: state.contact,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(fetchContacts()),
        addContact: (contactData, history) => dispatch(addContact(contactData, history)),
        showContact: (id, contact) => dispatch(showContact({id, contact})),
        closeModal: () => dispatch(closeModal()),
        deleteContact: (id) => dispatch(deleteContact(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);