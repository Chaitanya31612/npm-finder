import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

export const useActions = () => {
  const dispatch = useDispatch();

  // bindActionCreators return object with all the action creators
  return bindActionCreators(actionCreators, dispatch);
};
