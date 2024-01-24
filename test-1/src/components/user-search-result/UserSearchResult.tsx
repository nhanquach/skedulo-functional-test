import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

import Loading from "../Loading";
import ErrorMessage from "./ErrorMessage";
import UserTable from "./UserTable";

const UserSearchResult = () => {
  const state = useSelector((state: RootState) => state.githubUsers);

  if (state.isLoading) {
    return <Loading />;
  }

  if (state.error) {
    return <ErrorMessage />;
  }

  if (state.users === null) {
    return null;
  }

  return <UserTable />;
};

export default UserSearchResult;
