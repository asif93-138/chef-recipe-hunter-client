import React from 'react';

const RCard = (props) => {
    const {id, image, name, ingredients, cookingmethod} = props.recipe;
    return (
        <div>
            {id}, {image}, {name}, {ingredients}, {cookingmethod}
        </div>
    );
};

export default RCard;