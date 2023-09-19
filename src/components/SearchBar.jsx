export const SearchBar = () => {
  return (
    <div className="seach-bar bg-red-300 h-32 flex items-center justify-center rounded-md bg-search-pattern bg-center bg-cover bg-no-repeat">
      <div className="h-12 bg-white flex items-center gap-2 justify-between p-1 rounded-sm w-3/4">
        <input
          type="text"
          className="h-full outline-none px-1 placeholder:text-xs text-xs w-full"
          placeholder="Title, companies, experti..."
        />
        <input
          type="submit"
          className="h-full px-3 rounded-sm bg-light-blue text-white"
          value="Search"
        />
      </div>
    </div>
  );
};
