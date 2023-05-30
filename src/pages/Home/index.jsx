import  Container from "react-bootstrap/Container";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";

import Card from "../../components/Card";

function Home() {
  return ( 
    <Container fluid>
      <Row>
        <Col xs={12} md={3}> 
          <Card 
            image='https://images.pexels.com/photos/802195/pexels-photo-802195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Titulo'
            total={0}
          />
        </Col>
      </Row>
    </Container>
   );
}

export default Home;