import React from 'react';
import { robots } from '../robots';
import "../containers/style.css";

function Card ({ jerseyName, jerseyNumber, photo }) {
    
    return (
        <div className='tc bg- dib br3 pa3 ma2 grow bw2 shadow-5 '>
         <img alt='robots' className='photos'  src={photo} />
            <div>
                <h2 className='text'>{jerseyName}</h2>
                <p className='textt'>{jerseyNumber}</p>
            </div>
        </div>
    );
}

export default Card;