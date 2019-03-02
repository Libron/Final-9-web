import React, {Component} from 'react';
import Spinner from "../../components/Spinner/Spinner";
import ContactForm from "../../components/ContactForm/ContactForm";
import {connect} from "react-redux";
import {fetchContact, updateContact} from "../../store/actions/action";
import './EditPage.css';

class EditPage extends Component {
    componentDidMount() {
        this.props.fetchContact(this.props.match.params.id);
    }

    render() {
        if (this.props.loading) {
            return <Spinner />
        }

        return (
            <div className="EditPage">
                <h3 className="title">Edit contact information</h3>
                <ContactForm
                    id={this.props.match.params.id}
                    contact={this.props.contact}
                    history={this.props.history}
                    submit={this.props.updateContact}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contact: state.contact,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContact: (id) => dispatch(fetchContact(id)),
        updateContact: (id, data, history) => dispatch(updateContact(id, data, history))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);