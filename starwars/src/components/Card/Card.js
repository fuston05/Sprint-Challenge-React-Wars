import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 2%;
  margin: 2% 4%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #aaa;
  box-shadow: 2px 2px 5px #333;
`;

const StyledH3 = styled.h3`
  color: #666;
  font-size: 1.4rem;
  text-decoration: underline;
`;

const StyledP = styled.p`
  color: #aaa;
  font-size: 1rem;
  margin: 1% 0;
`;
// ////////////////////////

const Card = (props) => {
  return (
    <CardDiv>
      <StyledH3>{props.name}</StyledH3>
      <StyledP>Height: {props.height}</StyledP>
      <StyledP>Mass: {props.Mass}</StyledP>
      <StyledP>Hair Color: {props.hair}</StyledP>
      <StyledP>Eye Color: {props.eyes}</StyledP>
      <StyledP>Skin Color: {props.skin}</StyledP>
      <StyledP>Birth Year: {props.birth}</StyledP>
      <StyledP>Gender: {props.gender}</StyledP>
      <StyledP>Appeared in {props.films} Films.</StyledP>
      <StyledP>Owns {props.vehicles} Vehicles.</StyledP>
      <StyledP>Owns {props.ships} Starships.</StyledP>
    </CardDiv>
  );
}//end func

export default Card;