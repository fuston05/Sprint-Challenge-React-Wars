import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

// STYLED COMPONENTS
const Main = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   width: 95%;
   margin: 0 auto 0 auto;
   padding: 1%;
`;

const CardHolder = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-wrap: wrap;
`;

const StyledH1= styled.h1`
   font-size: 3rem;
   color: rgba(252, 187, 115, 1);
   text-shadow: 2px 2px #333;
`;
 // /////////////////////
 
const App = () => {
   // STATE //
   const [data, setData] = useState([]);


   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.

   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
   // side effect in a component, you want to think about which state and/or props it should
   // sync up with, if any.

   useEffect(() => {
      axios
         .get('https://swapi.co/api/people')
         .then(res => {
            console.log('data: ',res.data.results);// array
            const charData = res.data.results;
            setData(charData);
         })
         .catch(err => {
            console.log('Error: ', err);
         })
   }, []);

   return (
      <Main className="App">
         <StyledH1>React Wars</StyledH1>
         <CardHolder className='cardHolder'>

            {
               data.map((ele, i) => {
                  // console.log('ele: ', ele);
                  return <Card ships= {ele.starships.length} vehicles= {ele.vehicles.length} films= {ele.films.length} gender={ele.gender} skin= {ele.skin_color} birth= {ele.birth_year} mass= {ele.mass} eyes= {ele.eye_color} hair= {ele.hair_color} height= {ele.height+'"'} name={ele.name} key={i} />
               })
            }
         </CardHolder>

      </Main>
   );
}

export default App;
