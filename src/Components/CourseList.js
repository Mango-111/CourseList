import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Button, Row, Col,Card } from 'react-bootstrap';

function CourseList() {
    const [Courses, setCourses] = useState([]);

    const getCourses = async () => {
        const course = await axios.get('http://localhost:3002/Course');
        console.log(course);
        setCourses(course.data);
    }

    useEffect(() => {
        getCourses();
    }, []);

    console.log("courses", Courses);
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    {Courses.map((elem) => {
                        return (
                            <Col xs={12} lg={4} md={6}>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title className="mt-3">Course Name</Card.Title>
                                        <Card.Text><h3>{elem.name}</h3></Card.Text>
                                        <Button variant="primary" href="./Enquiry">Enquire</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default CourseList
