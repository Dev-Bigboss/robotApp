import React from 'react';
import Card from './Card.js';

function CardList ({ robots }) {
    
        return (
        <div>
            {robots.map((user, i) =>{
                return (
                    <Card 
                        key = {i}
                        id={robots[i].id}
                        jerseyName={robots[i].jerseyName} 
                        jerseyNumber={robots[i].jerseyNumber} 
                        photo={robots[i].photo}/>
                );
            }   
            )}
        </div>
        );
}
export default CardList;