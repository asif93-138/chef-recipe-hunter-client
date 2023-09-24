import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Chef = (props) => {
    
    const {id, chef_picture, chef_name, number_of_recipes, years_of_experience, likes} = props.chef;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={chef_picture} />
         <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        
        <p>Recipes: {number_of_recipes}</p>
        <p>Experience: {years_of_experience}</p>
        <p>Likes: {likes}</p>
        
        <Link to={`/details/${id}`}><Button variant="primary">View Recipe</Button></Link>
        </Card.Body>
        </Card>
        
    );
};

export default Chef;