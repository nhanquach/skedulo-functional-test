import { combineReducers } from "redux";

import githubUsersReducer from "./github-users/githubUsersSlice";

const rootReducer = combineReducers({
  githubUsers: githubUsersReducer,
});

export default rootReducer;
