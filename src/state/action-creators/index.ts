
import { ActionType } from "../action-types"

import { AppDispatch, AppState } from "../store"
import axios from 'axios'





export const getHistory = (history: any) => ({
    type: ActionType.HISTORY,
    payload: history
})

export const loadHistory = () => async (dispatch: AppDispatch, getState: AppState) => {
    try {
        const res = await axios.get("http://localhost:3041/history")
        dispatch(getHistory(res.data))
    } catch (error) {

    }
}

export const depositMoney = (amount: number) => (dispatch: any) => {
    const transaction = { type: "deposit", amount }
    const data = axios.post("http://localhost:3041/history", transaction)
    dispatch({
        type: ActionType.DEPOSIT,
        payload: { type: "deposit", amount }
    })

    dispatch(loadHistory())

}


export const withdrawMoney = (amount: number) => (dispatch: any) => {
    const transaction = { type: "withdraw", amount }
    const data = axios.post("http://localhost:3041/history", transaction)
    dispatch({
        type: ActionType.DEPOSIT,
        payload: { type: "withdraw", amount }
    })

    dispatch(loadHistory())

}

export const bankrupt = (dispatch: any, amount: number) => {
    dispatch(withdrawMoney(amount))
}
