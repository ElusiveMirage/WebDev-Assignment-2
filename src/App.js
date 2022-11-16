import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderDog from './components/HeaderDog';
import ShowDog from './components/ShowDog';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {

  const [pageData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [imagesPerPage, setImagesPerPage] = useState(15);

  const defaultURL = 'https://dog.ceo/api/breeds/image/random/45';
  const [filterURL, setURL] = useState(defaultURL);

  function changeURL(e) {
    setURL(e.target.value);
  }

  function changeNumber(e) {
    setImagesPerPage(e.target.value);
    setCurrentPage(1);
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  useEffect(() => {

    const getData = async ( ) => { 

      setLoading(true);
      
      const result = await axios.get(filterURL);
          console.log(filterURL);
          console.log(' result ', result );

          const newData = result.data.message;

          setData( newData );
          await timeout(2000);
          setLoading(false);
    }
    getData();
  }, [filterURL]);   

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = pageData.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div  className='container'>

      <HeaderDog /> 
      
      <div id='options'>
            <p>Filter</p>
            <select name="breed-filter" id="breed-filter" value={filterURL} onChange={changeURL}>
                <option value='https://dog.ceo/api/breeds/image/random/45'>Random</option>
                <option value='https://dog.ceo/api/breed/hound/images/random/45'>Hound</option>
                <option value='https://dog.ceo/api/breed/beagle/images/random/45'>Beagle</option>
                <option value='https://dog.ceo/api/breed/shiba/images/random/45'>Shiba</option>
                <option value='https://dog.ceo/api/breed/shihtzu/images/random/45'>Shihtzu</option>
            </select>

            <p>Show</p>
            <select name="change-number" id="change-number" value={imagesPerPage} onChange={changeNumber}>
                <option value='5'>5 images</option>
                <option value='10'>10 images</option>
                <option value='15'>15 images</option>
            </select>
        </div>      

      <Pagination imagesPerPage={imagesPerPage} totalImages={pageData.length} paginate={paginate}/>

      <ShowDog data={ currentImages } loading={loading}/> 

      <Pagination imagesPerPage={imagesPerPage} totalImages={pageData.length} paginate={paginate}/>

    </div>
  )
}

export default App
