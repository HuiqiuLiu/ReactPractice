import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import {Route} from 'react-router-dom';

function App(){
    // function getPage(){
    //     const route=window.location.pathname;
    //     if(route==='/about') return <AboutPage/>
    //     if(route==='/courses') return <CoursesPage/>
    //     return <HomePage/>;
    // }

    return (
        <div className="container-fluid">
            <Header/>
            {/* {getPage()} */}
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/courses' exact component={CoursesPage}></Route>
            <Route path='/about' exact component={AboutPage}></Route>
        </div>
    );

}

export default App;