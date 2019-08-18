import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {createPlace} from "../../store/actions/actions";

class NewPlaceForm extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        agree: false
    };

    submitFormHandler = event => {
        event.preventDefault();
        if (this.state.agree) {
            const formData = new FormData();
            Object.keys(this.state).forEach(key => {
                formData.append(key, this.state[key]);
            });

            this.props.createPlace(formData);
        }

    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    checkBoxHandler = (event) => {
        if (event.target.checked) {
            this.setState({agree: true})
        }
    };

    render() {
        return (
            <Fragment>
                <h1>Add new place</h1>
                <Form onSubmit={this.submitFormHandler}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input value={this.state.name}
                               type="text" name="name"
                               id="name" placeholder="Name place"
                               onChange={this.inputChangeHandler}
                               required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input value={this.state.description}
                               type="text" name="description"
                               id="description" placeholder="Description place"
                               onChange={this.inputChangeHandler}
                               required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input type="file" name="image"
                               id="image" required
                               onChange={this.fileChangeHandler}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label for={'agree'}>
                            I understand
                        </Label>
                            <Input name={'agree'} id={'1'} type="checkbox" onChange={this.checkBoxHandler} required/>
                        <FormText color="muted">
                            By Submitting this form you agree that the following information will be submitted the public domain and administrators
                            of the site will have full control over the said information  and
                        </FormText>
                    </FormGroup>
                    <FormGroup row>
                        <Button type="submit" color="success">Submit new place</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPlace: (placeData) => dispatch(createPlace(placeData))
});


export default connect(null, mapDispatchToProps)(NewPlaceForm);
