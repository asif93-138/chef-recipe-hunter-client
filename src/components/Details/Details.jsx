import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RCard from '../RCard/RCard';
import { Container } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    const chef = useLoaderData();
    
    const {id, chef_picture, chef_name, description, number_of_recipes, years_of_experience, recipes, likes} = chef;
    
    return (
        <Container>
            <Container className='d-lg-flex justify-content-between align-items-center my-4'>
                <img src={chef_picture} className='img-fluid w-50 r-img-w' />
                <div className=''>
                <h3>Name : {chef_name}</h3>
                <h4>Years of Experience : {years_of_experience}</h4>
                <h4>Number of Recipes : {number_of_recipes}</h4>
                <h4>Likes : {likes}</h4>
                </div>
                
            </Container>
            <Container>
                <p><strong>Bio : </strong> {description}</p>
                {
                    recipes.map(recipe => <RCard key={recipe.id} recipe={recipe}></RCard>)
                }
            </Container>
        </Container>
    );
};

export default Details;