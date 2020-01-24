import React from 'react';
import styled from 'styled-components';

const PaginationCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNum = styled.span`
  padding: 2px;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(252, 187, 115, 1);
  border: 1px solid #000;
  font-size: 1rem;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Pagination = (props) => {
  const numPages = [];
  for (let i = 1; i <= props.pages; i++) {
    numPages.push(i);
  }
  return (
    <PaginationCont className='paginationCont'>
      {
        numPages.map((el, ind) => {
          return <PageNum key={ind} onClick={(e) => { props.func(el, { ind }) }} className='pageNum'>{el}</PageNum>
        })
      }
    </PaginationCont>
  )
}

export default Pagination;
