import React from 'react';
import './Chefs.css';
import Container from 'react-bootstrap/Container';
import Chef from '../Chef/Chef'
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const chefs = useLoaderData();
    return (
        <>
            <Container id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.eastwestbank.com/content/dam/ewb-dotcom/reachfurther/newsarticlestore/484/Chef-Martin-Yan-top.jpg" alt="Martin Yan" className="d-block slide-img" />
                        <div className="carousel-caption">
                            <h3>Martin Yan</h3>
                            <p>50 years of experience!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/ZYHTO66Pe48/hqdefault.jpg?v=63efe9e3" alt="Ming Tsai" className="d-block slide-img" />
                        <div className="carousel-caption">
                            <h3>Ming Tsai</h3>
                            <p>30 years of experience!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://metro.co.uk/wp-content/uploads/2022/09/007-Ken-Hom-CBE-Wok-from-Hom-with-Lee-Kum-Kee-40cb.jpg?quality=90&strip=all" alt="Ken Hom" className="d-block slide-img" />
                        <div className="carousel-caption">
                            <h3>Ken Hom</h3>
                            <p>40 years of experience!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.dailymail.co.uk/i/pix/2010/02/19/article-1252360-080A2DD0000005DC-636_468x522.jpg" alt="Ching He Huang" className="d-block slide-img" />
                        <div className="carousel-caption">
                            <h3>Ching He Huang</h3>
                            <p>20 years of experience!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="data:image/jpeg;base64,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" alt="Susur Lee" className="d-block slide-img" />
                        <div className="carousel-caption">
                            <h3>Susur Lee</h3>
                            <p>35 years of experience!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://onecms-res.cloudinary.com/image/upload/s--ZVYU7a0l--/c_fill,g_auto,h_622,w_830/f_auto,q_auto/chef-jereme-leung-of-yi-by-jereme-leung-at-the-raffles-singapore.jpg?itok=S2rm50VK" alt="Jereme Leung" className="d-block slide-img" />
                        <div className="carousel-caption">
                            <h3>Jereme Leung</h3>
                            <p>25 years of experience!</p>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </Container>
            <Container className='d-lg-flex'>
                <Container className='c-grid'>

                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}>
                        </Chef>)
                    }
                </Container>
                <Container>
                <Container className='sidebar'>
                    <p>Submit your recipe Here!</p>
                </Container>
                <Container className='sidebar'>
                    <p>Follow Us!</p>
                </Container>
                </Container>
            </Container>
        </>
    );
};

export default Chefs;
