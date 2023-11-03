import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'


function Career() {
  return (
    <div className="container">
    <div className="card-container">
 <div className="card">
 <Row xs={1} md={3} className="g-4">
 <Col>
   <Card >
   <a href="https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/"> <Card.Img variant="top" src="./image/car1.png" /></a>
   <Card.Body>
     <Card.Title>Top Skills Required to Become a Digital Marketer</Card.Title>
     <Card.Text>
     Digital marketing is one of the most dynamic industries that has transformed how businesses connect
     </Card.Text>
     <a href="https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">5 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card>
 <a href="https://www.guvi.in/blog/career-opportunities-in-digital-marketing/"> <Card.Img variant="top" src="./image/car2.png" /></a>
   <Card.Body>
     <Card.Title>Career Opportunities in Digital Marketing | Digital Marketing Career</Card.Title>
     <Card.Text>
     As we move forward in today’s digital age, the need for businesses to engage with
     </Card.Text>
     <a href="https://www.guvi.in/blog/career-opportunities-in-digital-marketing/"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">5 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
<Col>
 <Card >
 <a href="https://www.guvi.in/blog/top-career-opportunities-for-ui-ux-design/"><Card.Img variant="top" src="./image/car3.png" /></a>
   <Card.Body>
     <Card.Title>Top 12 Career Opportunities for UI/UX Design</Card.Title>
     <Card.Text>
     Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye
     </Card.Text>
     <a href="https://www.guvi.in/blog/top-career-opportunities-for-ui-ux-design/"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
   </Card.Body>
   <Card.Footer className="text-muted">4 August 2023  No Comments</Card.Footer>
 </Card>
 </Col>
 </Row>
 
 </div></div></div>
  );
}

export default Career