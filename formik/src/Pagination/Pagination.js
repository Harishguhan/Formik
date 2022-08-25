import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import JsonData from '../MOCK_DATA.json';
import './Pagination.css';
const Pagination = () => {
  const [users,setusers] = useState(JsonData.slice(0,30));

  const [pageNumber,setPageNumber] = useState(0);

    const userPerPage = 5

    const PageVisited = pageNumber * userPerPage
    
    const displayUsers = users.slice(PageVisited,PageVisited + userPerPage)
    .map((user) =>{
        return(
          <div>
            <h4>{user.first_name}</h4>
            <h4>{user.email}</h4>
          </div>
        );
    })

    const pageCount = Math.ceil(users.length / userPerPage);

    const changePage = ({selected}) => {
      setPageNumber(selected);
    }

  return (
    <div className=''>
       {displayUsers}
       <ReactPaginate 
       previousLabel = {"Previous"}
       nextLabel = {"Next"}
       pageCount = {pageCount}
       onPageChange={changePage}
       containerClassName={"pagebtn"}
       previousLinkClassName={"previousbtn"}
       nextLinkClassName={"nextbtn"}
       disableClassName={"pagedisabled"}
       activeClassName={"activepage"}
       />
    </div>
  )
}

export default Pagination