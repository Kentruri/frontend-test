import { ActionType } from "../action-types/index"
import { Action } from "../actions"


const initialState = {
    history: [],
}



const reducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
        case ActionType.WITHDRAW:
        case ActionType.BANKRUPT:
            return {
                ...state
            };


        case ActionType.HISTORY:
            return {
                ...state,
                history: action.payload,
            }
        default:
            return state
    }
}

export default reducer