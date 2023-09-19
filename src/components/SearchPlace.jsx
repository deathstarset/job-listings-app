import { SearchBar } from "./SearchBar";
import { SearchLocation } from "./SearchLocation";

export const SearchPlace = () => {
  return (
    <div className="searchPlace px-5 flex flex-col gap-5">
      <SearchBar />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="fullTime"
          className="h-5 w-5 checked:bg-light-blue"
        />
        <label htmlFor="fullTime" className=" text-dark-blue text-sm">
          Full time
        </label>
      </div>
      <SearchLocation />
    </div>
  );
};
