
import { ActionType } from "../action-types"
import { AppDispatch, AppState } from "../store"
import axios from 'axios'


export const getHistory = (history: object) => ({
    type: ActionType.HISTORY,
    payload: history
})


export const loadHistory = () => async (dispatch: AppDispatch, getState: AppState) => {
    try {
        const res = await axios.get("http://localhost:3041/history")
        dispatch(getHistory(res.data))
    } catch (error) {
       console.log(error)
    }
}


export const depositMoney = (amount: number) => (dispatch: any) => {
    const transaction = { type: "deposit", amount }
    axios.post("http://localhost:3041/history", transaction).then((res: object) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: { type: "deposit", amount }
        })

        dispatch(loadHistory())
    }).catch((err : object) => {console.log(err)})
   

}


export const withdrawMoney = (amount: number) => (dispatch: any) => {
    const transaction = { type: "withdraw", amount }
    axios.post("http://localhost:3041/history", transaction).then((res: object) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: { typ: "withdraw", amount }
        })

        dispatch(loadHistory())
    }).catch((err : object) => {console.log(err)})


}


export const bankrupt = (amount: number) => (dispatch : any) => {
    //because if the amount is less than 0, it means that you are owing
    if (amount < 0) {
        dispatch(withdrawMoney(0))
    } else dispatch(withdrawMoney(amount))
}
