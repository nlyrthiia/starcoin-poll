import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import blocks from '@/Blocks/store';
import transactions from '@/Transactions/store';
import search from '@/Search/store';

const reducers = {
  [transactions.SCOPENAME]: transactions.reducer,
  [blocks.SCOPENAME]: blocks.reducer,
  [search.SCOPENAME]: search.reducer,
};

const createRootReducer = (history: any) => (state: any, action: any) => {
  return combineReducers({
    router: connectRouter(history),
    ...reducers
  })(state, action);
};

export default createRootReducer;
