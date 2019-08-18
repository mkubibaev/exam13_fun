import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class NewImages extends Component {

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        return (
            <Fragment>
                <Form>
                    <FormGroup>
                        <Label>New Image</Label>
                        <Input
                               type="file" name="review"
                               placeholder={"Enter you reviews"}
                               onChange={this.fileChangeHandler}/>
                        <Button type="submit">Add images</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

export default NewImages;
