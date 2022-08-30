import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './contactReducer';

const store = createStore(reducer, applyMiddleware(thunk));

export * from './contactActions';
export default store;
