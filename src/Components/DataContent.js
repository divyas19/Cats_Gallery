import { createContext, useContext } from "react";
import axios from 'axios';
import { useQuery } from "react-query";
import loading from "../Images/loading.gif";
import errorImage from "../Images/error.gif";

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

export function DataProvider({ children, condition }) {

    const fetchData = async () => {
        const result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=100&api-key=live_gVwcKIvbd5GyNXKcvMbNuagf1a1eJ2wxpJ0wnwNphJI7kFUP5Pe7Lpt0KywYhfD2');
        return result.data;
    };

    const { data, isLoading, isError, error, isFetching } = useQuery('data', fetchData);

    if (condition && (isLoading || isFetching)) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <img src={loading} className="w-[60%]" alt="Loading..." />
            </div>
        );
    }

    if (condition && isError) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <img src={errorImage} className="w-[20%]" alt="Error" />
            </div>
        );
    }

    return (
        <DataContext.Provider value={{ data, isLoading, isFetching, isError, error }}>
            {children}
        </DataContext.Provider>
    );
}
