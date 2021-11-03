import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from '../actions/index';

const initialState = {
    results: {
     artistName:"",
     collectionName:""
     
    },
    artworkUrl60: {
    large: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b4/ce/df/b4cedf46-1e43-ea49-75a8-e84a722e99d0/cover.jpg/70bb.jpg",
    medium:"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b4/ce/df/b4cedf46-1e43-ea49-75a8-e84a722e99d0/cover.jpg/70bb.jpg",

    thumbnail:"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b4/ce/df/b4cedf46-1e43-ea49-75a8-e84a722e99d0/cover.jpg/70bb.jpg",
    },
    
    isFetching: false,
    error: ''
    
}
    
export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case (FETCH_START):
            return ({
                ...state,
                results : {},
                isFetching: true,
                error: ''
            })
        case (FETCH_SUCCESS):
                        return ({
                ...state,
                results: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_ERROR):
            return ({
                ...state,
                results :{},
                isFetching: false,
                error: action.payload
            })

        default:
            return({
                ...state
            })
    }
};