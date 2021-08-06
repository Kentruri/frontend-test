import { ActionType } from "../action-types/index"
import { Action } from "../actions"


const initialState = [
    {}
]



const reducer = (state: any = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return state.push(action.payload);
        case ActionType.WITHDRAW:
            return state.push(action.payload);
        case ActionType.BANKRUPT:
            return state = [{}];
        case ActionType.HISTORY:
            return action.payload;
        default:
            return state
    }
}

export default reducer