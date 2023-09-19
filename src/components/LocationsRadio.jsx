import { useState } from "react";

export const LocationsRadio = () => {
  const [locations, setLocations] = useState([
    { id: 1, name: "London" },
    { id: 2, name: "Amesterdam" },
    { id: 3, name: "New York" },
    {
      id: 4,
      name: "Berlin",
    },
  ]);
  return (
    <div className="locations-radio">
      <form
        action="
        "
        className="flex flex-col gap-4"
      >
        {locations.map((location) => {
          return (
            <div className="london flex items-center gap-3" key={location.id}>
              <input
                type="radio"
                name="default"
                className="w-5 h-5 p-0 border-2 border-red-300"
              />
              <label htmlFor="london" className="text-dark-blue text-sm">
                {location.name}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};
