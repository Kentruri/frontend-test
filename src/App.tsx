import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';


function App() {

  const state = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="app">
      <div className="container">


        <h1 className="title">Welcome to your   <span id="title">finances</span></h1>

        <h2>Current money: {state} $</h2>
        <button  className="btn" onClick={() => depositMoney(1000)}>Deposit</button>
        <button  className="btn"  onClick={() => withdrawMoney(1000)}>Withdraw</button>

        <div className="historyList">

          <ul>
            <li>Deposit: 1000</li>
            <li>Withdraw: 1000</li>
            
          </ul>

        </div>

        <button className="btn" style={{background:"#5658dd"}} onClick={() => bankrupt()}>Bankrupt</button>


      </div>
    </div >
  );
}

export default App;
