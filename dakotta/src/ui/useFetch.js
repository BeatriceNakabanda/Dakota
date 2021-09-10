import { useState ,useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(null);
    // useEffect runs a function every render of a component
    // fetch the data as soon as the component first renders
    useEffect(() => {
        const abortCont = new AbortController(); // Aborts a DOM request before its completed

        fetch(url, {signal: abortCont.signal}) //use promises
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    isLoading(false);
                    setError(err.message);
                }
            })
            return () => abortCont.abort();

    }, []);

    return { data, isLoading, isError}
}
 
export default useFetch;