import { useReducer } from "react";
import { LOGIN, LOGOUT } from "./action-types";

// action object looks something like this
// const action = {
//     payload: {
//         username: "dummy",
//         // any other data
//     },
//     type: "login" //logout
// }
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { username: action.payload.username, isAuth: true };
    case LOGOUT:
      return { username: "", isAuth: false };
    default:
      return state;
  }
};
const initialState = {
  username: "Rohan",
  isAuth: true,
};

const ReducerSolution = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Current user: {state.username}, isAuthenticated:{" "}
      {state.isAuth ? "Yes" : "No"}
      <br />
      <button
        onClick={() => dispatch({ payload: { username: "John" }, type: LOGIN })}
      >
        Login
      </button>
      <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
    </>
  );
};

export default ReducerSolution;
