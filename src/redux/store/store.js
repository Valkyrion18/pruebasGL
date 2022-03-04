import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { productReducer } from '../reducers/productReducer';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    coordinates: productReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)