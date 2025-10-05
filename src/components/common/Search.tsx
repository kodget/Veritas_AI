import type { SearchProps } from "../../types";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/Search/searchSlice";

const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state.search);
  return (
    <div>
      <input
        className="border-1 rounded-lg text-white font-normal p-4 focus:outline-none focus:ring-white w-lg"
        placeholder="Search claims..."
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </div>
  );
};

export default Search;
