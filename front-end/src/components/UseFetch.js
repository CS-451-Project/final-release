import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseFetch = (url, options) => {

  const navigate = useNavigate();
  
  // state that holds the data from the fetch
  const [data, setData] = useState(null);
  // state that holds the loading status
  const [loading, setLoading] = useState(true);
  // state that holds the error status
  const [error, setError] = useState(null);

  useEffect(() => {
    // async function that fetches the data
    // fetch runs asynchronously, so we need to use async and await
    // async and await are used to wait for the fetch to finish before continuing
    const fetchData = async () => {
      try {
        // response is the data from the fetch
        const response = await fetch(url, options);
        // json is the data from the response
        if(response.status === 401){
          console.log("unauthorized");
          navigate(`/login`);
        }
        const json = await response.json();
        // sets the data to the json data in the state
        setData(json);
        // log the data
        console.log(data)
        // sets loading to false, we can use this functinally to display a loading screen
        setLoading(false);
      } catch (error) {
        // sets the error to the error in the state, we can use this functinally to display an error screen
        setError(error);
        setLoading(false);
      }
    };
    
    // calls the fetchData function
    fetchData();



    // This [url] is a dependency array
    // It tells useEffect to only run when the url changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, options])
    // Data should NOT be in the dependency array since it is always changing and being set inside the useEffect

  // returns the data, loading, and error
  return { data, loading, error };
};

export default UseFetch;