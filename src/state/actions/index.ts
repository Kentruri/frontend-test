import { ActionType } from "../action-types/index"


interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: object
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: object
}


interface BankruptAction {
    type: ActionType.BANKRUPT
}


interface HistoryAction {
    type: ActionType.HISTORY,
    payload: object
}

export type Action = DepositAction | WithdrawAction | BankruptAction | HistoryAction ;