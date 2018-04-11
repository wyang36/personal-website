import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Contact.css';

import Input from '../../components/UI/Input/Input';

import axios from '../../axios';


class ContactData extends Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'John Smith'
                },
                label: 'Name',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'abc@mail.com'
                },
                value: '',
                label: 'Email',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'I would like to talk to you about a project!'
                },
                value: '',
                label: 'Message',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }

    emailHandler = (event) => {
        event.preventDefault();
        //this.setState({ loading: true });
        const formData = {};
        for (let formElement in this.state.contactForm) {
            formData[formElement] = this.state.contactForm[formElement].value;
        }
        axios.post('/Contacts.json', formData)
            .then(response => {
                //this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                //this.setState({ loading: false });
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required)
            isValid = value.trim() !== '' && isValid;

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        };

        const updatedFormElement = { ...updatedContactForm[inputIdentifier] };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let input in updatedContactForm) {
            formIsValid = updatedContactForm[input].valid && formIsValid;
        }
        this.setState({ contactForm: updatedContactForm, formIsValid: formIsValid });


    }

    render() {
        const formElementsArray = [];

        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form onSubmit={this.emailHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        label={formElement.config.label}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.emailHandler}>Send</Button>
            </form>);

        return (
            <div className={classes.ContactData}>
                <h3>Contact Me</h3>
                {form}
            </div>
        )
    }
}

export default ContactData;