import React from 'react';
import { Link } from 'react-router-dom';

const Chef = (props) => {
    const {id, chef_picture, chef_name, number_of_recipes, years_of_experience, likes} = props.children[1];
    return (
        <div>
            img: {chef_picture}<br />
            name: {chef_name} <br />
            recipes: {number_of_recipes} <br />
            experience: {years_of_experience}<br />
            likes: {likes}<br />
            <Link to={`/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default Chef;