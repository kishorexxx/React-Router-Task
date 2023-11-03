import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'

function All() {
  return (
    <div className="container">
       <div className="card-container">
    <div className="card">
    <Row xs={1} md={3} className="g-4">
    <Col>
      <Card className='card' >
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-The-Impact-of-Remote-Work-in-Hiring-Tech-Professionals.jpg" />
      <Card.Body>
        <Card.Title>How Long It Would Take to Master Cloud Computing Engineering</Card.Title>
        <Card.Text>
        In our modern world, technology is everywhere, making our lives more convenient and connected.
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">17 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
<Col>
    <Card>
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/11/in-article-online-training-thumbnail-2048x1024.webp" />
      <Card.Body>
        <Card.Title>9 Benefits of Partnering with Technical Training Program</Card.Title>
        <Card.Text>
        In today’s dynamically evolving business world, organizations are constantly leveraging all possible ways to stay
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">16 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
<Col>
    <Card >
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-Based-Companies-for-Business-Analysts-1.webp" />
      <Card.Body>
        <Card.Title>Top 6 Product-Based Companies for Business Analysts [2023]</Card.Title>
        <Card.Text>
        Sometimes it becomes very difficult for us to choose the best product-based company for any
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left',color:"green" }}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">17 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
    </Row>
    <Row xs={1} md={3} className="g-4">
      <Col>
    <Card >
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-based-Company-Vs-Service-based-Company.webp" />
      <Card.Body>
        <Card.Title>Product-based Company Vs Service-based Company: Which is Best Choice?</Card.Title>
        <Card.Text>
        Deciding between joining a product-based company vs a service-based company can be pretty challenging when
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">14 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
<Col>
    <Card >
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp" />
      <Card.Body>
        <Card.Title>Best Data Science Books to Learn 2023</Card.Title>
        <Card.Text>
        Today, we’re going to talk about something really cool: data science. It’s all about using
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green" }}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">17 August 2023  No Comments</Card.Footer>
    </Card>
    </Col>
    <Col>
    <Card >
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Cloud-Computing-vs-Edge-Computing-Which-One-is-Better.webp" />
      <Card.Body>
        <Card.Title>Cloud Computing vs Edge Computing: Which One is Better in 2023?</Card.Title>
        <Card.Text>
        In the world of tech, two buzzwords, “Cloud Computing” vs “Edge Computing,” have been taking
        </Card.Text>
        <a href="#"  style={{ textAlign: 'left' ,color:"green"}}>READ MORE »</a>
      </Card.Body>
      <Card.Footer className="text-muted">11 August 2023  No Comments</Card.Footer>
    </Card></Col></Row>
    </div></div></div>
    
  );
}

export default All