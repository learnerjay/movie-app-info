import {SEARCH_MOVIE, FETCH_MOVIES,FETCH_MOVIE, LOADING} from '../actions/types';


const initialState = {
    text :  '',
    movies : [],
    //Data coming from search , if not found from Api.
    loading: false,
    movie : []
};

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                //Payload - actual data is stored
                text : action.payload,
                loading: false
            }; 
        case FETCH_MOVIES:
            return{
                ...state,
                //Payload - actual data is stored
                movies: action.payload,
                loading: false
            }; 
        case FETCH_MOVIE:
            return{
                ...state,
                //Payload - actual data is stored
                movie: action.payload,
                loading: false
            }; 
        case LOADING:
            return{
                ...state,
                //Payload - actual data is stored
                loading: true
            };  
        default:
            return state;
    }
}