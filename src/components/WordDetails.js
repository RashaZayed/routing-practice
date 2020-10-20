import React from 'react';
import {Link} from '@reach/router'

const WordDetails = props =>{
    const {color , background} = props;
    console.log(color);
    const divStyle = {
       color: color ,
       backgroundColor: background ,
    }

    return(
        
        <h1 style={divStyle}> The Word is: Hello</h1>
        
    )
}
export default WordDetails;