import React, {
    useEffect,
    useState
} from 'react'
import {
    NotificationManager
} from 'react-notifications';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import { addAdmin } from 'services/api/super_admin/admin';

function Add() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const onAdd = () => {
        var data = {
            email: email,
            name: name
        }
        addAdmin(data).then((response) => {
            NotificationManager.success(response.data.message);
            setEmail("")
            setName("")
        }).catch((error) => {
            console.log(error)
            if (error.response) {
                NotificationManager.error(error.response.data.errors[0].msg);
            } else {
                NotificationManager.warning("Server Error");
            }
        })
    }

    useEffect(() => {
        setName(name.replace(/[^a-zA-Z ]/g, ""));
        if (name.split(' ').length - 1 > 1) {
            setName(name.slice(0, -1))
            console.log(name)
        } else {
            let regex = / /g;
            var newEmail = name.toLowerCase()
            newEmail = newEmail.replace(regex, '.')
            newEmail = newEmail + "@minsante.com"
            setEmail(newEmail)
        }

    }, [name])

    return (
        <div>

            <Form>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="Name"
                            type="text"
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            readOnly
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>   
                        
                            {
                            isValidEmail(email)? 
                                <>
                                <Button color="primary" type="button" 
                                    onClick={() => {
                                        onAdd();
                                    }}
                                >
                                    Add
                                </Button>
                                </> :
                                <>
                                <Button color="primary" type="button" disabled
                                    onClick={() => {
                                    // console.log("Check");
                                }}
                                >
                                    Add
                                </Button>
                                </>
                            }    
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Button color="secondary" type="button">
                            Reset Form
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Add