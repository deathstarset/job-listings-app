import { JobsContainer } from "./JobsContainer";
import { LocationsRadio } from "./LocationsRadio";
export const SearchLocation = () => {
  return (
    <div className="search-location flex flex-col gap-5">
      <h3 className="text-light-grey font-semibold">LOCATION</h3>
      <div className="w-full shadow-sm rounded-md">
        <input
          type="text"
          placeholder="City, state, zip code or country"
          className="placeholder:text-xs placeholder:text-light-grey w-full py-4 px-2 rounded-md text-xs"
        />
      </div>
      <LocationsRadio />
      <JobsContainer />
    </div>
  );
};
