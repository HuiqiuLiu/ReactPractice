import React from 'react';

function HomePage(){


    return ( 
    <React.Fragment>
    <div className='jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>React, Flux, and React Router for ultra-responsive web apps.</p>
        <a href='/about'>About</a>
    </div>
    </React.Fragment>
    );
}

export default HomePage;