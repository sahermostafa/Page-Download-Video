import React,{useState} from "react";
import{Button,Modal,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RightPage.css";

function Page({ keys,image, name,disc}) {
  const[shower,setShower]=useState(false);
  function Handels(){
    setShower(!shower);

  }
  return (
    <div className="RightPagetitle">
      <Card style={{ width: '18rem',height:`350px` }}  >
            <Card.Img variant="top" style={{width: '15rem',height:`150px`}} src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              
              <Card.Text className="tex1">
                {disc}
           
                <Button variant="danger" onClick={Handels}>Show More</Button>
              <input className="field2" name="name" placeholder="Enter full Comments..." type="text" />
             
              
              </Card.Text>
             
            </Card.Body>
      </Card>
      <Modal show={shower} >
        <Modal.Header><img src={image} style={{width: `100%`, height: `200px`}}/></Modal.Header>
        <Modal.Body className="tex1">
          <h4>{name}</h4>
          <div style={{fontSize:`20px`,fontWeight:`bold`}}>Actors: Saher Mostafa and Samer Mostafa</div>
          <div>{disc}</div>
          <div> <Button variant="danger">Download</Button></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={Handels}  variant='danger'>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Page;