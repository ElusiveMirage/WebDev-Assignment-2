import React from 'react'; 

import Resource from './Resource'; 

const ShowDog = () => {

    const webURL = 'https://dog.ceo/api/breeds/image/random/15'

    const render = ( data ) => {

        if ( data.loading === true ) return <p>loading ...</p>

        console.log('Got the data', data );

     return (    data.trans.message.map( dog => (

            <div key={dog.id} >

                <img className='image' src= { dog } alt='dog img' />

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
