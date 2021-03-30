import React from 'react';

const Searchbox = ({srchange}) => {
    return (
        <div className = 'pa2'>
            <input className = 'pa3 ba b-green bg-lightest-blue'
                type = 'search' 
                placeholder = 'search robots'
                onChange = {srchange}  >
                
            </input>
        </div>
    )
}

export default Searchbox;
