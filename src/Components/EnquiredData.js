import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import axios from 'axios'

function EnquiredData() {
    const [enquiredData, setenquiredData] = useState([]);

    const getData = async () => {
        const userdata = await axios.get('http://localhost:3001/Data');
        console.log("data", userdata);
        setenquiredData(userdata.data)
    };

    useEffect(() => {
        getData();
    }, [])

    console.log("data coming", enquiredData);

    return (
        <div>
            <h2>Data</h2>
            <Container>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th> Name</th>
                                <th> Email</th>
                                <th> Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiredData.map((ele,index) => {
                                console.log(ele);
                                return (
                                    <tr key={index}>

                                        <td>{index+1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.Contact}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                </Row>
            </Container>

        </div>
    )
}

export default EnquiredData
