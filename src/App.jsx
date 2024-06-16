import { useEffect, useState } from "react";

import "./App.css";
import Balance from "./components/Balance";
import NewTransaction from "./components/NewTransaction";
import TransactionList from "./components/TransactionList";
import axios from "axios";

function App() {
  const [isNewTransaction, toggleIsNewTransaction] = useState(0);
  const [balance, setBalance] = useState(1000);
  const [used_balance, setUsedBalance] = useState(10);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('./assets/transactions.json')
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      {isNewTransaction ? (
        <NewTransaction
          setBalance={setBalance}
          setUsedBalance={setUsedBalance}
          toggleTransaction={toggleIsNewTransaction}
          setTransactions={setTransactions}
        />
      ) : (
        <>
          <Balance
            used_balance={used_balance}
            current_balance={balance}
          />
          <div className="line"></div>
          <TransactionList transactions={transactions} toggleTransaction={toggleIsNewTransaction} setTransactions={setTransactions}/>
        </>
      )}
    </div>
  );
}

export default App;
