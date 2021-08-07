import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/reducers';
import { loadHistory, bankrupt, depositMoney, withdrawMoney } from './state/action-creators';



const App = () => {

  const { history } = useSelector((state: RootState) => state.bank)

  const dispatch = useDispatch();

  //template of an transaction object
  interface transaction {
    type: string,
    amount: number
  }


  //if the state is update, the list will be update cuz that depend of the state
  useEffect(() => {
    dispatch(loadHistory())
  }, []);

  const list = history.map((val: any) => { return <li key={val.id}> {val.type}: {val.amount}</li> })

  const allMoney = history.reduce((acumulador: number, transaction: transaction) => {
    if (transaction.type === "deposit") {
      return acumulador + transaction.amount
    }
    else { return acumulador - transaction.amount }

  }, 0)

  return (
    <div className="app">
      <div className="container">


        <h1 className="title">Welcome to your   <span id="title">finances</span></h1>

        <h2>Current money: {history.length > 1 ?
          allMoney
          :
          0} $</h2>
        <button className="btn" onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
        <button className="btn" onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button>

        <div className="historyList">


          {history.length > 1 ? <ul> {list} </ul> : 0}



        </div>

        <button className="btn" onClick={() => bankrupt(dispatch, allMoney)}>Bankrupt</button>


      </div>
    </div >
  );
}

export default App;
