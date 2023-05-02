import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RCard from '../RCard/RCard';

const Details = () => {
    const chef = useLoaderData();
    
    const {id, chef_picture, chef_name, description, number_of_recipes, years_of_experience, recipes, likes} = chef;
    
    return (
        <div>
            {id}<br />
            {chef_name}<br />
            {chef_picture}<br />
            {description}<br />
            {number_of_recipes}<br />
            {years_of_experience}<br />
            {likes}<br />
            <div>
                {
                    recipes.map(recipe => <RCard key={recipe.id} recipe={recipe}></RCard>)
                }
            </div>
        </div>
    );
};

export default Details;