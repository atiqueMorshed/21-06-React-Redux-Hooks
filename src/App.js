import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as accountActionCreators from "./redux/account/account.action";

import "./App.css";

function App() {
  console.log(accountActionCreators);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    accountActionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>Balance: {account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
