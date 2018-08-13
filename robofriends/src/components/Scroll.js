import React, { Component } from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '565px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;