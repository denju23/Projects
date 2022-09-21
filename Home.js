import React from 'react';
import Products from './Products';



const Home = () => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div className="card bg-white text-dark">
                    <img src="/images/fashion-banners.jpg" className="card-img" alt="Stony Beach" height={'550px'} />
                    <div className="card-img-overlay d-flex flex-column justify-content-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <div className='container'>
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        <Products/>
        </React.Fragment>

    );
}

export default Home;