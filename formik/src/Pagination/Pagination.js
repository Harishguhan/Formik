import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import JsonData from "../MOCK_DATA.json";
import "./Pagination.css";
const Pagination = () => {
  const [users, setusers] = useState(JsonData.slice(0, 30));

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 6;

  const PageVisited = pageNumber * userPerPage;

  const displayUsers = users
    .slice(PageVisited, PageVisited + userPerPage)
    .map((user) => {
      return (
        <div className="col-lg-4 mt-3">
          <div class="card" style={{ width: "18rem;" }}>
            <img class="card-img-top" src={user.image} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">
                <span>UserName:</span>
                {user.first_name}
              </h5>
              <p>
                <span>LastName:</span>
                {user.last_name}
              </p>
              <p>
                <span>Email:</span>
                {user.email}
              </p>
              <p>
                <span>City:</span>
                {user.City}
              </p>
            </div>
            <div className="icon">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-square-twitter"></i>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div className="row">{displayUsers}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagebtn"}
        previousLinkClassName={"previousbtn"}
        nextLinkClassName={"nextbtn"}
        disableClassName={"pagedisabled"}
        activeClassName={"activepage"}
      />
    </div>
  );
};

export default Pagination;
