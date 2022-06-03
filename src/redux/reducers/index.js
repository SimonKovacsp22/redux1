 export const REMOVE_FROM_FAVOURITES ='REMOVE_FROM_FAVOURITES'
const initialState = {
    favourites:{
        content:[]
    },
  }
  
  // = initialState means the DEFAULT VALUE of the argument!
  const mainReducer = (state = initialState, action) => {
    // the reducer function will be in charge of computing the
    // new state of the application every time an action gets dispatched
    // our reducer needs to be told what to do when a particular action gets dispatched
    // so we have a bunch of possible actions, so let's write a switch case to manage them all!
    switch (action.type) {
      // the book is getting passed with action.payload
      case 'ADD_TO_FAVOURITES':
        return {
         ...state,
         favourites: {
             ...state.favourites,
             content: [...state.favourites.content, action.payload]
         }
        }
      case 'REMOVE_FROM_FAVOURITES':
        return {
            ...state,
            favourites: {
              ...state.favourites,
              
              content: state.favourites.content.filter((company, i) => i !== action.payload),
            },
        }
      default:
        // the default case is for an action.type that we didn't think of
        // maybe an edge case, maybe a bug, something unhandled...
        // what is the new state we're going to compute out of this edge case??
        return state
      // returning the state as it was in our default case makes the application unbreakable!
    }
  }
  
  export default mainReducer
  