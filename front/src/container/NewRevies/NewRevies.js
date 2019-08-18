import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class NewRevies extends Component {
    state =  {
      review: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <Fragment>
                <Form>
                    <FormGroup>
                        <Label for="review">New Review</Label>
                        <Input value={this.state.review}
                               type="text" name="review"
                               placeholder={"Enter you reviews"}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Button>Submit review</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

export default NewRevies;
