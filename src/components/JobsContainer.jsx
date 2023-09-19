import { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import ReactPaginate from "react-paginate";
export const JobsContainer = () => {
  const [jobs, setJobs] = useState({
    loading: true,
    data: [],
    error: "",
  });
  const handlePageChange = (data) => {
    setJobs({
      ...jobs,
      loading: true,
    });
    const apiEndpoint = `https://www.themuse.com/api/public/jobs?page=${
      data.selected + 1
    }`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setJobs({
          ...jobs,
          data: data,
          loading: false,
        });
      });
    const pagination = document.querySelector(".pagination");
    pagination.children[1 + data.selected].classList.add(
      "bg-dark-blue",
      "text-white"
    );
  };
  useEffect(() => {
    const apiEndpoint = `https://www.themuse.com/api/public/jobs?page=1`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setJobs({
          ...jobs,
          data: data,
          loading: false,
        });
      });
    const pagination = document.querySelector(".pagination");
    pagination.children[1].classList.add("bg-dark-blue", "text-white");
  }, []);
  return (
    <>
      <div className="jobs-container flex flex-col gap-5">
        {!jobs.loading &&
          jobs.data.results.map((job) => {
            return <JobCard key={job.id} job={job} />;
          })}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={""}
        pageCount={20}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName="pagination flex items-center justify-between w-full text-xs"
        pageClassName="p-1 px-3 border text-dark-blue border-dark-blue hover:bg-dark-blue hover:text-white rounded-sm"
        nextClassName="text-dark-blue rounded-sm border border-dark-blue py-1 px-3"
        previousClassName="text-dark-blue rounded-sm border border-dark-blue py-1 px-3"
      />
    </>
  );
};
