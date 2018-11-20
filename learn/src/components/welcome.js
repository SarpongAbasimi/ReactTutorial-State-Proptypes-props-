import React from 'react';
import PropTypes from 'prop-types';

const Welcome=(props)=>{
    return(
        <div> 
            <h1>Welcome to React APP : {props.name} </h1>
            {props.children}
        </div>

    );
}

Welcome.propsTypes={
    name:PropTypes.string
}


export default Welcome