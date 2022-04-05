import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { reducerResturant } from './reducer/reducerResturant'

const reducers=combineReducers({
    restaurantReducer: reducerResturant,
})
const initialstate={}
const middleware=[thunk]
const store=createStore(reducers,initialstate,applyMiddleware(...middleware))
export default store



