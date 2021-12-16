import React from 'react';
import{Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import "./Home.css";
function APP() {
  return (
      <Container fluid>
        <div className="home">
          <LeftPage />
          <RightPage />
        </div>
      </Container>
    
  );
}
export default APP;