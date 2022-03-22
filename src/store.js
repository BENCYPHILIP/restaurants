import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const reducers=combineReducers({

})
const initialstate={}
const middleware=[thunk]
const store=createStore(reducers,initialstate,applyMiddleware(...middleware))
export default store