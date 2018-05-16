import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Contact.css';

import Input from '../../components/UI/Input/Input';

import axios from '../../axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as brands from '@fortawesome/fontawesome-free-brands';
import file from '@fortawesome/fontawesome-free-regular/faFilePdf';


class ContactData extends Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Jon Snow'
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
                    placeholder: 'jonsnow@winterfell.com'
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
                    placeholder: 'Winter is coming...'
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
                <h2>Contact Me</h2>
                <a href="https://firebasestorage.googleapis.com/v0/b/personal-website-b958a.appspot.com/o/Resume_03_16_2018.pdf?alt=media&token=fa4726a8-ff5a-437d-94b6-92ab1d85d81e"
                target="_blank" rel="noopener noreferrer" title="Take My Resume!">
                    <FontAwesomeIcon icon={file} size="lg" />
                </a>
                <a href="https://github.com/wyang36" target="_blank" rel="noopener noreferrer" title="Github">
                    <FontAwesomeIcon icon={brands.faGithub} size="lg"/>
                </a>
                <a href="https://www.linkedin.com/in/kira-yang-41298220" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FontAwesomeIcon icon={brands.faLinkedin} size="lg"/>
                </a>
                <a href="https://www.instagram.com/kirawyang/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FontAwesomeIcon icon={brands.faInstagram} size="lg"/>
                </a>
                
                {form}
            </div>
        )
    }
}

export default ContactData;