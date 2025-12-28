import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from './loremActions';

// Initial State - data should be an empty array
const initialState = {
  loading: true,  // Start with loading true for initial state
  data: [],
  error: null
};

// Reducer Function
const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    
    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default loremReducer;