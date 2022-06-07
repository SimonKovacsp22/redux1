import { ADD_TO_FAVOURITES } from "../Actions"
import { REMOVE_FROM_FAVOURITES } from "../Actions"
const initialState = {
    
    favourites: [], 
  }

  const favReducer = (state = initialState, action) => {
      switch(action.type){
        case ADD_TO_FAVOURITES:
            return {
             ...state,
             favourites:[...state.favourites, action.payload] 
            }
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter((company,index)=>index !== action.payload)
            }
          default: 
          return state
      }
  }

  export default favReducer