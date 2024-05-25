import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

const Example = ({ sidebar }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  // page render
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  // handle pages

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await fetch("https://dummyjson.com/users");
        const resultData = await result.json();
        // console.log(resultData.users);

        setData(resultData.users);

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {error && <h2 className="text-center text-3xl">{error}</h2>}
      {loading && !error ? (
        <div className="text-3xl  text-yellow-500 text-center  flex items-center justify-center mt-10">
          <DNA
            visible={true}
            height="120"
            width="160"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center ${
            sidebar ? " ml-72 " : " ml-0 "
          } duration-500  flex-col gap-12 h-[200vh]`}
        >
          <div className="flex flex-wrap gap-8">
            {getPaginatedItems().map((item, idx) => {
              return (
                <div
                  className="card bg-slate-300 flex gap-4  flex-col items-center justify-center "
                  key={idx}
                >
                  <div>{item.firstName}</div>
                  <img src={item.image} alt="" />
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">{renderPageNumbers()}</div>

          {/* pagination logic */}
          <div>
            {/* <ul>
          {getPaginatedItems().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
            <div>
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Example;
