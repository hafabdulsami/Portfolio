import React, { useState, useRef } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import axios from 'axios';


const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name:"",
    reply_to:"",
    message:""
  });

  const getUserData = (event) => {
   var name = event.target.name;
   var value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }
 

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData)
    const data ={
      Name:formData.from_name,
      Email:formData.reply_to,
      Message:formData.message
    }
    axios.post('https://sheet.best/api/sheets/f33012ba-533b-4587-9cb3-58789d649dfc',data).then((res)=>{
      console.log(res)
    })
    fetch("https://docs.google.com/spreadsheets/d/1aZOLk3295FiNl7RJTDoIEvcEvSTybhBxPMmUyYlgeME/edit?usp=sharing", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "d",
            name: "d",
            age: "d",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={getUserData}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={getUserData}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={getUserData}
            />
           
            <Button type="submit" className="edit" >
              Send
            </Button>
            
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
