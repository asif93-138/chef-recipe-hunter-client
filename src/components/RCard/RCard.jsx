import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const RCard = (props) => {
    const [show, setShow] = useState(false);
    function btBlur() {document.getElementById(`x-${id}`).disabled = 'disabled';}
    const {id, name, ingredients, cookingmethod, ratings} = props.recipe;
    return (
        <Container className='my-4'>
          <h5>Recipe : {id}</h5>
          <h5>Recipe name : {name}</h5>
          <p><strong>Ingredients : </strong>{ingredients}</p>
          <p><strong>Cooking Method : </strong>{cookingmethod}</p>
          <p><strong>Ratings : </strong>{ratings}</p>
            <Row className='m-0'>
            <Col>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Toast!</strong>
            
          </Toast.Header>
          <Toast.Body>Added to favorites!</Toast.Body>
        </Toast>
      </Col>
      <Col>
        <Button id={`x-${id}`} onClick={() => {setShow(true); btBlur();}}>Make it Favorite</Button>
      </Col>
            </Row>
        </Container>
    );
};

export default RCard;