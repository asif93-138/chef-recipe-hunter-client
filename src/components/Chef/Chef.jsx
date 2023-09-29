import React from 'react';
import './Chef.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Chef = (props) => {
    
    const {id, chef_picture, chef_name, number_of_recipes, years_of_experience, likes} = props.chef;
    return (
        <Card className='p-ref' style={{ width: '17rem' }}>
        <Card.Img style={{ height: '180px' }} variant="top" src={chef_picture} />
         <Card.Body className='p-fix'>
        <Card.Title>{chef_name}</Card.Title>
        
        <p>Recipes: {number_of_recipes}</p>
        <p>Experience: {years_of_experience} years</p>
        <p>Likes: {likes}</p>
        
        <Link to={`/details/${id}`}><Button variant="primary">View Recipe</Button></Link>
        </Card.Body>
        </Card>
        
    );
};

export default Chef;