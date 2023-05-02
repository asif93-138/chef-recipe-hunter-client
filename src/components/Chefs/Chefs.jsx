import React from 'react';
import Chef from '../Chef/Chef'
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const chefs = useLoaderData();
    return (
        <div className='d-flex flex-wrap'>
            
            {
                chefs.map(chef => <Chef 
                    key={chef.id}
                    chef={chef}>                     
                    </Chef>)
            }
        </div>
    );
};

export default Chefs;