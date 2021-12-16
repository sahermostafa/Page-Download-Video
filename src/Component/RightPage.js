import React from 'react';
import { DataList } from "../helpers/DataList";
import{Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RightPage.css";
import Page from "./Page";
function RightPage() {
  return (
    <div className="RightPage">
      <Container fluid>
          <h1 className="RightPageTitle">Films</h1>
          <div className="RightPageList">
          {DataList.map((serviceItem, key) => {
          return (
            
            <Page
              key={key}
              image={serviceItem.image}
              name={serviceItem.name}
              disc={ serviceItem.descript}
            />
            
          );
        })}
        </div>
         
      </Container>
    </div>
    
  );
}
export default RightPage;