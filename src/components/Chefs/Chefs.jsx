import React from 'react';
import Chef from '../Chef/Chef'
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const chefs = useLoaderData();
    return (
        <div>
            Chefs are here : {chefs.length}
            {
                chefs.map(chef => <Chef 
                    key={chef.id}>
                    chef={chef}                      
                    </Chef>)
            }
        </div>
    );
};

export default Chefs;