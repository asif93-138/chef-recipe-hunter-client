import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const chef = useLoaderData();
    const {id, chef_picture, chef_name, number_of_recipes, years_of_experience, likes} = chef;
    return (
        <div>
            {id}<br />
            {chef_name}<br />
            {chef_picture}<br />
            {number_of_recipes}<br />
            {years_of_experience}<br />
            {likes}<br />
        </div>
    );
};

export default Details;