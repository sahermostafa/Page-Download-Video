import React from 'react';
import{Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
function APP() {
  return (
    
    <Container fluid>
        <Navbar />
        <Home />
        <Footer />
    </Container>
  );
}
export default APP;
