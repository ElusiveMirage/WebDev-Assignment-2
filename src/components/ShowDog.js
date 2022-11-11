import React from 'react'; 

import Resource from './Resource'; 

const ShowDog = () => {

    const webURL = 'https://dog.ceo/api/breeds/image/random/15'

    const render = ( data ) => {

        if ( data.loading === true ) return <p>loading ...</p>

        console.log('Got the data', data );

     return (    data.trans.message.map( dog => (
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

            <Resource path={ webURL  } render={ render } />

        </div>
    )
}

export default ShowDog
