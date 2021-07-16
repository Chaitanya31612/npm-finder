import React from "react";
import { useState } from "react";
// import { connect, useDispatch } from "react-redux";
// import { Dispatch } from "redux";
// import { actionCreators, RootType } from "../redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
  // searchRepository: (term: string) => void;
}

const RepositoryList = (props: Props) => {
  const [term, setTerm] = useState("");

  // Method for using actionCreators - useDispatch
  // Method for accessing state - useSelector

  // Method - 1 -> connect function and use mapDispatchToProps

  // Method - 2
  // way other than connect is to use dispatch from useDispatch and fire the function using
  // dispatch(actionCreators.searchRepository(term))
  // const dispatch = useDispatch()

  // Method - 3 -> create custom hook like useActions and use bindActionCreators in it
  const { searchRepository } = useActions();

  // This below will pass the entire state from redux into state variable
  // const state = useSelector((state) => state);

  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepository(term);
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          className='search-input'
          placeholder='Search npm Repository'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <>
          <h4 style={{ textAlign: "center" }}>{data.length} Items Found</h4>
          <ul>
            {data.map((repo: any) => (
              <a target='_blank' rel='noreferrer' href={repo.links["npm"]}>
                <li className='link' key={repo.name}>
                  {repo.name}
                </li>
              </a>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   searchRepository: actionCreators.searchRepository,
// });

// export default connect(null, {
//   searchRepository: actionCreators.searchRepository,
// })(RepositoryList);

export default RepositoryList;
