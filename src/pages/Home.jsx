import React from 'react';
import Service from '../components/Service';
import Hero from '../components/Hero';
import Lawyers from './Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Lawyers data={data}></Lawyers>
            <Service></Service>
        </div>
    );
};

export default Home;