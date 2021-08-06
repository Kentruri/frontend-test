import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import {AppDispatch,AppState} from "../store"
import axios from 'axios'


export const depositMoney = (amount: number) => {
    return {
        type: ActionType.DEPOSIT,
        payload: {type: "deposit", amount}
    }
}

export const withdrawMoney = (amount: number) => {
    return {
        type: ActionType.WITHDRAW,
        payload: {type: "withdraw", amount}
    }
}

export const bankrupt = () => {
    return {
        type: ActionType.BANKRUPT
    }
}

export const History = async(dispatch:AppDispatch,getState:AppState) =>{
   try {
       const res = await axios.get("http://localhost:3041/history")

       dispatch({
           type: ActionType.HISTORY,
           payload: res.data
       })
   } catch (error) {
       
   }
}