import { GET_COMPANIES,IS_LOADING_FALSE,GET_ERROR,IS_LOADING_TRUE } from "../Actions"

const initialState ={
    companies:[],
    error:false,
    isLoading:false,
}

const compReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload
            }
        case GET_ERROR:
            return {
               ...state,
               error: true
            }

        case IS_LOADING_FALSE:
            return {
                ...state,
                isLoading:false
            }
            case IS_LOADING_TRUE:
                return {
                    ...state,
                    isLoading:true
                }   
        default:
        return state
    }

}

export default compReducer