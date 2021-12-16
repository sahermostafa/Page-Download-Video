import React from 'react';
import{Container, Row,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from "../imges/pexels-cottonbro-5435180.jpg";
import slide2 from "../imges/pexels-harrison-haines-3536235.jpg";
import slide3 from "../imges/pexels-jean-cont-10126253.jpg";
import slide4 from "../imges/pexels-jirzo-nez-10122322.jpg";
import slide5 from "../imges/pexels-vinícius-vieira-ft-5744639.jpg";
import slide6 from "../imges/pexels-thirdman-5408080.jpg";
import slide7 from "../imges/pexels-thirdman-5407935.jpg";
import slide8 from "../imges/pexels-shahin-khalaji-10032462.jpg";
import slide9 from "../imges/pexels-pixabay-35888.jpg";
import slide10 from "../imges/pexels-mario-wallner-9882189.jpg";
import slide11 from "../imges/pexels-karolina-grabowska-5422694.jpg";
import "./LeftPage.css";
function LeftPage() {
  return (
    <div className="leftpage">
      <Container >
       <Row>
         <Card style={{ width: '18rem',marginTop:`20px` }}>
          < Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide1} />
         </Card>
       </Row>
       <Row>
         <Card style={{ width: '18rem' }}>
           <Card.Img style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide2} />
         </Card>
       </Row>
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide3} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide4} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displays">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide5} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displays">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide6} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displaysss">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide7} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displaysss">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide8} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displaysss">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide9} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displaysss">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide10} />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '18rem' }} className="displaysss">
          <Card.Img  style={{width: `100%`,height: `200px`,marginBottom: `10px`}} src={slide11} />
        </Card>
      </Row>
    </Container>
    </div>
  );
}
export default LeftPage;