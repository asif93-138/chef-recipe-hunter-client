import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-4'>
           <h4>1. Differences between uncontrolled and controlled components.</h4>
           <p>- In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
           <h4>2. How to validate React props using PropTypes?</h4>
           <p>- Installing the prop-types Library and Basic Usage And we validate them by setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.</p>
           <h4>3. Tell us the difference between nodejs and express js.</h4>
           <p>- Express is built on top of Node, so yes, Express adds more features while building apps. Node is just a Javascript environment with libraries to make it easy to write software, whereas Express extends Node specifically to add middleware, routing, and much more.</p>
           <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
           <p>- Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.</p>
            <p className='text-end'><strong>- collected from Google.</strong></p>
        </Container>
    );
};

export default Blog;