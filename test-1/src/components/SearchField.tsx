import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";
import { clearUsers, fetchUsers } from "../redux/github-users/githubUsersSlice";

import useDebounce from "../hooks/debounceHook";

const DEBOUNCE_TIME = 500;

const SearchField = () => {
  const state = useSelector((state: RootState) => state.githubUsers);
  const dispatch = useDispatch<AppDispatch>();

  const dispatchPromise = useRef<any>(null);
  const [searchString, setSearchString] = useState("");

  const debouncedSearch = useDebounce(() => {
    if (dispatchPromise.current) {
      dispatchPromise.current.abort();
    }

    dispatchPromise.current = dispatch(fetchUsers(searchString));
  }, DEBOUNCE_TIME);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchString(value);

    if (value.length > 2) {
      debouncedSearch(value);
    }

    if (value.length === 0 && state.users?.length) {
      dispatch(clearUsers());
    }
  };

  return (
    <input
      className="search-field"
      type="text"
      onChange={onChange}
      value={searchString}
      placeholder="Search"
    />
  );
};

export default SearchField;
