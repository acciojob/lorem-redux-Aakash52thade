// Action Types
export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

// Action Creators
export const fetchLoremRequest = () => ({
  type: FETCH_LOREM_REQUEST
});

export const fetchLoremSuccess = (data) => ({
  type: FETCH_LOREM_SUCCESS,
  payload: data
});

export const fetchLoremFailure = (error) => ({
  type: FETCH_LOREM_FAILURE,
  payload: error
});

// Async Thunk Action - Fetches data from JSONPlaceholder API
// This returns an array of posts with title and body, perfect for the expected output
export const fetchLoremData = () => {
  return (dispatch) => {
    dispatch(fetchLoremRequest());
    
    // Using JSONPlaceholder which returns array of posts with title and body
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Data is already in the format: [{ userId, id, title, body }, ...]
        dispatch(fetchLoremSuccess(data));
      })
      .catch(error => {
        dispatch(fetchLoremFailure(error.message));
      });
  };
};