import React from 'react';
import styled from 'styled-components';

const CardDiv= styled.div`
   display: flex;
   height: 30%;
   width: 25%;
   padding: 2%;
   margin: 1%;
   border-radius: 5px;
   background-color: deepskyblue;
`

const Card= (props)=>{

   return(
      <CardDiv>
         <h3>{props.name}</h3>
      </CardDiv>
   );
}//end func

export default Card;