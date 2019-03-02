import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        if (props.contact) {
            this.state = {...props.contact};
        } else {
            this.state = {
                avatar: '',
                email: '',
                firstname: '',
                lastname: '',
                phone: '',
            };
        }
    }

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.submit(this.props.id, {...this.state}, this.props.history);
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler} className='ContactForm'>
                <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <Input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.valueChanged} />
                    <Label for="lastname">Last Name</Label>
                    <Input type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.valueChanged} />
                </FormGroup>

                <FormGroup>
                    <Label for="phone">Phone #</Label>
                    <Input type="text" name="phone" id="phone"  value={this.state.phone} onChange={this.valueChanged} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email"  value={this.state.email} onChange={this.valueChanged} />
                </FormGroup>

                <FormGroup>
                    <Label for="avatar">Photo URL</Label>
                    <Input type="text" name="avatar" id="avatar" value={this.state.avatar} onChange={this.valueChanged} />
                </FormGroup>
                <FormGroup>
                    <p>Photo Preview</p>
                    {this.state.avatar ? <img src={this.state.avatar} alt={this.state.firstname} style={{widht: '100px', height: '100px'}}/> : null}
                </FormGroup>
                <Button color="info" className="btn-submit">Submit</Button>
            </Form>
        );
    }
}

export default ContactForm;