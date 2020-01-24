import React from 'react';
import styled from 'styled-components';

const PaginationCont= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNum= styled.span`
  padding: 2px;
  background-color: dodgerBlue;
  border: 1px solid #000;
  font-size: 1rem;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Pagination = (props) => {
  console.log('pages form pagination', props.pages);
  const numPages= [];
  for (let i = 0; i < props.pages; i++) {
    numPages.push(i);
  }
  return (
    <PaginationCont className= 'paginationCont'>
      {
        numPages.map((el, ind) => {
          return <PageNum value={el} key= {ind} onClick= { (e)=> {props.func(e)} } className= 'pageNum'>{el}</PageNum>
        })
      }
    </PaginationCont>
  )  
}

export default Pagination;
