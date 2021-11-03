import axios from 'axios';




export const getItunes = () => {
    return (dispatch) => {
      dispatch(fetchStart());
  
      axios
        .get("https://itunes.apple.com/search?term=radiohead")
        .then((res) => {
          dispatch(fetchSuccess( res.data.results[0] ));
          console.log(res.data.results[0]);
        })
        .catch((err) => {
          
          dispatch(fetcherror(err));
        });
    }
  }
  export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

  export const fetchStart = () => {
    return { type: FETCH_START }
};

export const fetchSuccess = (results) => {
    return ({ type: FETCH_SUCCESS, payload:results });
  };

  export const fetcherror = (err) => {
    return { type: FETCH_ERROR, payload: err };
  }; 