import React from "react";
import RepositoryList from "./RepositoryList";

interface Props {}

const App = (props: Props) => {
  return (
    <div>
      <h1>Search Repository</h1>
      <RepositoryList />
    </div>
  );
};

export default App;
