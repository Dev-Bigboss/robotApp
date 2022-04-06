import React from 'react';

function Scroll (props) {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid  rgb(157, 167, 190)', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll; 