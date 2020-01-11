import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

const Main = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   width: 95%;
   margin: 0 auto 0 auto;
   padding: 1%;
`;

const CardHolder= styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

const App = () => {

   const [ data, setData ]= useState([]);


   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.

   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
   // side effect in a component, you want to think about which state and/or props it should
   // sync up with, if any.

   useEffect(() => {
      axios
         .get('https://swapi.co/api/people')
         .then(res => {
            // console.log(res.data.results);// array
            const charData = res.data.results;
            setData(charData);
            
         })
         .catch(err => {
            console.log("Error: ", err)
         })
   },[])


   return (
      <Main className="App">
         <h1 className="Header">React Wars</h1>
         <CardHolder className='cardHolder'>
            
            {
               data.map((ele, i) => {
                  // console.log('ele: ', ele);
                  return <Card name= {ele.name} key= {i} />
               } )
            }   
         
              
         </CardHolder>

      </Main>
   );
}

export default App;
