import React, { useState } from 'react';

const ShowDog = ({ data, loading }) => {
    
    const render = ( data, loading ) => {

        if (loading === true ) return (<p>loading ...</p>)

     return (    data.map( dog => (
            <div className='flip-card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img key={dog.id} className='image' src= { dog } alt='dog img' />
                    </div>
                    
                    <div className='card-back'>
                        <h1>Doggo</h1>
                        <p>This is a cute doggo</p>
                    </div>
                </div>
            </div>
          )
     )

     ) 
    }



    return (
        <div>

            <div  className='showlist'>
            
            {   render( data, loading )  } 
  
            </div>

        </div>


    )
}

export default ShowDog
