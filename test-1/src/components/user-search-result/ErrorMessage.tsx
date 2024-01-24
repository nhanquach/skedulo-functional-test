import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";


const ErrorMessage = () => {
  const errorMessage = useSelector(
    (state: RootState) => state.githubUsers.error
  );

  return <div className="error-message">{errorMessage}</div>;
};

export default ErrorMessage;
