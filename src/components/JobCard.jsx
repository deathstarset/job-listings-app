import { Link } from "react-router-dom";
export const JobCard = ({ job }) => {
  return (
    <Link
      className="job-card flex gap-4 bg-white p-2 rounded-md shadow-sm cursor-pointer"
      to={`jobs/${job.id}`}
    >
      <img
        src={`https://logo.clearbit.com/${job.company.short_name}.com`}
        onError={(e) => {
          e.target.src = "https://placehold.co/80?text=Not+Found";
          e.target.style.padding = "0px";
        }}
        alt=""
        className="w-20 h-20 aspect-auto object-contain bg-very-light-blue p-2"
      />
      <div className="text-dark-blue flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold">{job.company.name}</p>
          <p className="font-normal">
            {job.levels[0].short_name} {job.categories[0].name}
          </p>
          <p className="text-xs border-[1.5px] border-dark-blue w-fit p-1 font-semibold rounded-[2.5px]">
            {job.type === "external" ? "Office" : "Remote"}
          </p>
        </div>
        <div className="flex gap-5 text-xs text-light-grey">
          <p>{job.locations[0].name}</p>
          <p>{getDate(job.publication_date)}</p>
        </div>
      </div>
    </Link>
  );
};
export function getDate(date) {
  const timeDifference = Date.now() - Date.parse(date);
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return days + " days ago";
  } else if (hours > 0) {
    return hours + " hours ago";
  } else if (minutes > 0) {
    return minutes + " minutes ago";
  } else {
    return seconds + " seconds ago";
  }
}
