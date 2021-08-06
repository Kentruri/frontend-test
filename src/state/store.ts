import { applyMiddleware, createStore,compose } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
)


//types
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>