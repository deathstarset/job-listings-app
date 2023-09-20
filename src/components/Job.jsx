import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDate } from "./JobCard";
export const Job = () => {
  const [job, setJob] = useState({
    loading: true,
    data: {},
    error: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const apiEndpoint = `https://www.themuse.com/api/public/jobs/${id}`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setJob({
          ...job,
          loading: false,
          data: data,
        });
        console.log(data);
      });
  }, []);
  return (
    <div className="job px-5 flex flex-col gap-5 text-dark-blue">
      <Link className=" text-light-blue" to={"/"}>
        Back to search
      </Link>
      {!job.loading && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-light-grey font-semibold">HOW TO APPLY</p>
            <p className="text-sm">
              Please email a copy of your resume and online portfolio to{" "}
              <span className="text-light-blue ">{job.data.company.name}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 text-xs">
            <h1 className=" text-2xl font-semibold">{job.data.name}</h1>
            <p className="border-[1.5px] border-dark-blue w-fit p-1 font-semibold rounded-[2.5px]">
              {job.data.type === "external" ? "Office" : "Remote"}
            </p>
            <p className="text-light-grey">
              {getDate(job.data.publication_date)}
            </p>
          </div>
          <div className="flex gap-5 items-top">
            <img
              src={`https://logo.clearbit.com/${job.data.company.short_name}.com`}
              onError={(e) => {
                e.target.src = "https://placehold.co/80?text=Not+Found";
                e.target.style.padding = "0px";
              }}
              alt=""
              className="w-20 h-20 aspect-auto object-contain bg-very-light-blue"
            />
            <div className="flex flex-col justify-around ">
              <h3 className="text-lg font-semibold">{job.data.company.name}</h3>
              <p className="text-xs text-light-grey">
                {job.data.locations[0].name}
              </p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: job.data.contents }}
            className="flex flex-col gap-3"
          ></div>
        </div>
      )}
    </div>
  );
};
