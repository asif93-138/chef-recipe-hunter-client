import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const RCard = (props) => {
    const [show, setShow] = useState(false);

    const {id, image, name, ingredients, cookingmethod} = props.recipe;
    return (
        <div>
            {id}, {image}, {name}, {ingredients}, {cookingmethod}
            <Row>
            <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Toast!</strong>
            
          </Toast.Header>
          <Toast.Body>Added to favourites!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Favourite</Button>
      </Col>
            </Row>
        </div>
    );
};

export default RCard;