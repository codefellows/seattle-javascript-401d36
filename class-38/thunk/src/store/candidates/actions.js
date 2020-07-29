import axios from "axios";


// async action creator
export const fetchCandidates = (/** any data from our component*/) => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3000/candidates');
  dispatch({
    type: 'FETCH_CANDIDATES',
    payload: response.data,
  });
}

export const incrementVotes = () => async (dispatch) => {

}

// normal action creator
export const reset = () => {
  return {
    type: 'RESET'
  }
}