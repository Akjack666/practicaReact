import React from "react";
import "./ContactUsForm.css";
import { checkIfUserHasSignIn } from "../../services/Util";


// 3. El nombre y apellidos del formulario deben inicializarse a los valores del nombre y apellidos del currentUser()

const initialState = () => {
    const result = JSON.parse(sessionStorage.getItem('currentUser'));
    return {


        name: result.name,
        surname: result.surname,
        subject: '',
        message: ''
    }
};

export default class ContactUsForm extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado
        checkIfUserHasSignIn(this.props.history);


        this.state = initialState();

        // 3. Gestionar el formulario y verificar la información (onChange)
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        // 3. Una vez verificada enviar a través de this.props.onSubmit
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({ [field]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();


        if (this.state.name.trim().length < 5) {
            alert("The name imust be bigger than 5 characters");
            return;
        }

        if (this.state.surname.trim().length < 5) {
            alert("The last name must be bigger than 5 characters");
            return;
        }

        if (this.state.subject === "") {
            alert("The subject is empty");
            return;
        }

        if (this.state.message === "") {
            alert("The message is empty");
            return;
        }


        this.props.onSubmit(this.state)

        this.setState = {
            subject: "",
            message: ""
        }

    }



    render() {
        return <>
            <h4 className={`ml-2 mb-4`}>Contact with the WallaKeep team</h4>

            <form onSubmit={this.handleSubmit}>

                <div>
                    <h5 className={`ml-2`}><b>Name</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Surname</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                </div>
                <div>
                        <h5 className={`ml-2`}><b>Subject</b></h5>
                        <input className={`form-control d-block contact-form-input`} type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
                </div>
                <div>
                        <h5 className={`ml-2`}><b>Message</b></h5>
                        <textarea className={`form-control d-block contact-form-input`} value={this.state.message} name="message" cols="30" rows="10" onChange={this.handleChange} />
                </div>
                <div className={`ml-2`}>
                    <button type="submit" className="btn-primary btn" >Save</button>

                </div>
            </form>
        </>;
    }
}
