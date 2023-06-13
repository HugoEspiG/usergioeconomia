import React from 'react';
import PItem from '../components/atoms/PItem'
import BusquedaHome from '../components/organism/BusquedaHome';
import HomeGraphCharger from '../components/organism/HomeGraphCharger';

const Home = () => {
    return (
        <div className="d-flex justify-content-center position-relative">
            <div className='mx-auto'>
                <PItem variant={"fs-1 fw-semibold"} color={"dark"} className={"mt-5 mb-4 p-2 text-center"}>Lorem Ipsum</PItem>
                <PItem variant={"fs-4"} color={"dark"} className={"my-4 mx-5 p-4 text-center lh-lg"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, explicabo atque! Voluptates dignissimos distinctio enim iste consectetur, vel atque. Incidunt ducimus provident ut odit non! A odit eligendi libero. Natus!</PItem>
                <BusquedaHome></BusquedaHome>
                <PItem variant={"fs-3 fst-italic"} color={"dark"} className={"my-4 mx-5 p-4 text-center lh-lg"}>Nuestros grafos populares:</PItem>
                <HomeGraphCharger></HomeGraphCharger>
            </div>
        </div>
    );
};

export default Home;