import React, { useContext } from 'react';
import './Footer.css';
import { AuthContext } from '../../providers/AuthProvider';

const Footer = () => {
    const {} = useContext(AuthContext);
    return (
        <footer className='text-bg-dark mt-4'>
            <div className='container py-4'>
            <section className='d-md-flex justify-content-around mb-4'>
            <div className='fw-fix'>
                <h5>About</h5>
                <p>Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.</p>
            </div>
            <div className='fw-fix'>
                <h5>Archives</h5>
                <p>June 2014</p>
                <p>July 2014</p>
                <p>August 2014</p>
                <p>November 2014</p>
            </div>
            <div className='fw-fix'>
                <h5>Recipes</h5>
                <p>Browse Recipes</p>
                <p>Recipe Page</p>
                <p>Submit Recipe</p>
            </div>
            <div className='fw-fix-s'>
                <h5>Newsletter</h5>
                <p>Sign up to receive email updates on new product announcements, gift ideas, sales and more.</p>
                <p><input type='email' className='' /> <button type='' className=''>Subscribe</button></p>
            </div>
            </section>
            <div><p>© Copyright 2023 by <a className='text-light' href='https://github.com/asif93-138'>Asif</a> . All Rights Reserved. Inspired by <a href='https://themeforest.net/item/chow-recipes-food-html5-template/9711524' className='text-light'>ThemeForest</a></p></div>
        </div>
        </footer>
    );
};

export default Footer;