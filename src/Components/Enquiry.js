import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import { Card, Container,Form,Button,Row,Col,Dropdown,DropdownButton} from 'react-bootstrap'

function Enquiry() {
    // const[addUser,setUser]=useState([]);

    const [Courses, setCourses]= useState([]);
    const [Name,setName]=useState("");
    const[nameError, setNameError]=useState("");

    const [Email,setEmail]=useState("");
    const[emailError, setEmailError]=useState("");

    const [Contact,setContact]=useState("");
    const[contactError, setContactError]=useState("");

    const[checkBox, setCheckBox]=useState(true);
    const[checkBoxError,setcheckBoxError]=useState("");

    const regForName=RegExp(/^([A-Za-z]{3,15})$/);
    const regForEmail=RegExp(/^([a-zA-Z0-9\.-])+@([a-zA-Z0-9-]+).([a-z]{2,25})$/);
    const regForContact=RegExp(/^[6-9]\d{9}$/);

    const handleNameChange =(e)=>{
        setName(e.target.value);
        setNameError("");
    }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
        setEmailError("");
    }

    const handleContactChange =(e)=>{
        setContact(e.target.value);
        setContactError("");
    }

    const handleCheckBox=(e)=>{
        e.preventDefault();
        setCheckBox(e.target.value);
        setcheckBoxError("");
    }
    const handleFormSubmit =(e)=>{
        e.preventDefault();

        if(Name==""){
            setNameError("This field is required*")
        }
        else if(Email==""){
            setEmailError("This field is required*")
        }
        else if(Contact==""){
            setContactError("This field is required*")
        }
        else if(!regForName.test(Name)){
            setNameError("Please enter valid name");
        }
        else if(!regForEmail.test(Email)){
            setEmailError("Please enter valid email id");
        }
        else if(!regForContact.test(Contact)){
            setContactError("Plesae enter 10 digit number starting with 6,7,8 & 9");
        }
        else if(checkBox.Checked==false){
            setcheckBoxError("Please accept the terms & Conditions")
        }
        else {
            // alert("Form submitted Successfully");

            //  let URL = ('http://localhost:3001/Data');
              const user = axios.post('http://localhost:3001/Data',
              {
                name:Name,
                email:Email,
                Contact:Contact
            })
            .then(res=>{console.log("result",res)})
            .catch(err=>{console.log(err)})
             console.log("data",user);
              alert("Form submitted Successfully");
        }
}

    const getCourses=async()=>{
        const course = await axios.get(' http://localhost:3002/Course');
        console.log(course);
        setCourses(course.data);
    }

    useEffect(()=>{
        getCourses();
    },[]);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Enquiry Form</Card.Title>
                        <Card.Text>
                            <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="First & Last Name"
                                     onChange={handleNameChange} value={Name}/>
                                     {nameError && <div style={{color:"red"}}>{nameError}</div>}<br></br>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                     onChange={handleEmailChange} value={Email}/>
                                     {emailError && <div style={{color:"red"}}>{emailError}</div>}<br></br>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="Number"
                                     onChange={handleContactChange} value={Contact}/>
                                     {contactError && <div style={{color:"red"}}>{contactError}</div>}<br></br>
                                </Form.Group>

                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <h6>Select the course you liked:</h6>
                                <DropdownButton id="dropdown-basic-button" title="courses">
                                {Courses.map((elem)=>{
                                        return(
                                     <Dropdown.Item>{elem.name}</Dropdown.Item> )
                                        })}
                                </DropdownButton>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                  <Form.Label>Your Suggestions</Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I agree to all the terms and Conditions"
                                    value={checkBox} onchange={handleCheckBox} />
                                    {checkBoxError && <div style={{color:"red"}}>{checkBoxError}</div>}<br></br>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Enquiry
