import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/reducers';
import { History,bankrupt,depositMoney,withdrawMoney } from './state/action-creators';
import axios from "axios"


const App = () => {

  const state = useSelector((state: RootState) => state.bank)

  const dispatch = useDispatch();

  //template of an transaction object
  interface transaction {
    type: string,
    amount: number
  }

 

  //if the state is update, the list will be update cuz that depend of the state
  useEffect(() => {

    dispatch(History)
  }, [state.bank]);


  //List

  const list = state.map((val: any) => { return <li> {val.type}: {val.amount}</li>});

  //All money

  const allMoney = state.reduce((acumulador: number, transaction: transaction) => {
    if (transaction.type === "deposit") {
      return acumulador + transaction.amount
    }
    else { return acumulador - transaction.amount }

  }, 0)

  console.log(allMoney)



  return (
    <div className="app">
      <div className="container">


        <h1 className="title">Welcome to your   <span id="title">finances</span></h1>

        <h2>Current money: { state.length > 1 ? allMoney : 0} $</h2>
        <button className="btn" onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
        <button className="btn" onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button>

        <div className="historyList">


          { state.length > 1 ? <ul> { list } </ul> : 0}



        </div>

        <button className="btn" onClick={() => bankrupt()}>Bankrupt</button>


      </div>
    </div >
  );
}

export default App;
