import React from 'react';

import Cards from './Cards'

const Cardlist = ({Robots}) => {
    return (
       <div>
            {
                Robots.map((user,i) => {

                    return (
                        <Cards key= {user.id} id= {user.id}  name= {user.name} email= {user.email}/>
                    
                    )

                }

                )
            }  
       </div> 
    )
}


export default Cardlist