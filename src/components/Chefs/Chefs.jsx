import React from 'react';
import './Chefs.css';
import Container from 'react-bootstrap/Container';
import Chef from '../Chef/Chef'
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const chefs = useLoaderData();
    return (
        <Container className='c-grid'>
            
            {
                chefs.map(chef => <Chef 
                    key={chef.id}
                    chef={chef}>                     
                    </Chef>)
            }
        </Container>
    );
};

export default Chefs;