import React from 'react';

// component
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '0.5px solid black', height: '400px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;