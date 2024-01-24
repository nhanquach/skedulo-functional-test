import React from "react";

import SearchField from "./components/SearchField";
import UserSearchResult from "./components/user-search-result";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchField />
      <UserSearchResult />
    </div>
  );
}

export default App;
