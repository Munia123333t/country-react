import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

const {name , flags ,population , area , cca3} = country;


const [visited , setVisite]= useState(false)


const handleVisited = () => {
    setVisite(!visited)
}


    return (
        <div className='country'>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>area:{area}</p>
            <p><small>code:{cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;