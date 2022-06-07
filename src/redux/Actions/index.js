export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_COMPANIES = 'GET_COMPANIES'
export const GET_ERROR = 'GET_ERROR'
export const IS_LOADING_FALSE = 'IS_LOADING_FALSE'
export const IS_LOADING_TRUE = 'IS_LOADING_TRUE'

export const addToFavouritesAction = (companyToAdd) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: companyToAdd
    }
}

export const removeFromFavouritesAction = (companyIndex) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: companyIndex
    }
}

export const getCompaniesAction = (query) => {
    const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='
    return async (dispatch) => {
        try{
            const response = await fetch(
            baseEndpoint + query + '&limit=20'
          )
      
          if (!response.ok) {
            alert('Error fetching results')
            dispatch({
                type: GET_ERROR,

            })
            return
          }
      
          let { data } = await response.json()
          dispatch({
              type: IS_LOADING_FALSE,
            })
          dispatch({
              type:GET_COMPANIES,
              payload: data,
          })
        }   catch(error){
            dispatch({
                type: GET_ERROR,
            })
             console.log(error)
        }
    }
}

export const startLoadingAction = ()=> {
   return {
       type: IS_LOADING_TRUE
   }
}