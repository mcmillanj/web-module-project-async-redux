import React,{useEffect} from "react";
import { connect } from "react-redux";
import {fetcherror,getItunes} from "../actions/index";
// import styled from "styled-components";




const Itunes = ({results,isFetching,error,dispatch}) => {

    useEffect(() => {
     dispatch(getItunes());
    }, );



    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }

    const handleClick = () => {
      dispatch(getItunes());
    }

    return (

        <div>
          <h2>Itunes info: {results.artistName}</h2>
             {results.collectionNames}
          <img src={results.artworkUrl60}alt="radio head"/>
            {/* //                  */}
         
            
          <button onClick={handleClick}>itunes button</button>
        </div>
      );
    };
    
    const mapStateToProps = (state) => {
    //   console.log(state);
      return {
        results: state.results,
        isFetching: state.isFetching,
        error: state.error
      };
    };
    
    export default connect(mapStateToProps)(Itunes); 