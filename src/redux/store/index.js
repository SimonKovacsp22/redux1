
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favReducer from '../reducers/favReducer'
import compReducer from '../reducers/compReducer'

const store = configureStore({
  reducer: combineReducers({
    fav: favReducer,
    comp: compReducer,
  }),
  // we're going to tell Redux which reducer function to use!
})

export default store

// the final step now is to INJECT the redux store into our component tree