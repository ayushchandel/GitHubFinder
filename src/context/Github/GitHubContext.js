import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubContextProvider = ({children}) =>
{
   //const [users, setUsers] = useState([])
    //const [loading, setLoading] = useState(true);

  

    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const setLoading = () =>
    {
        dispatch(
            {
                type: 'SET_LOADING'
            }
        )
    }



    const [state, dispatch] = useReducer(GitHubReducer, initialState);

  
    //fetch initial users for testing
    const searchUsers = async (text) =>
    {
        const params = new URLSearchParams(
            {
                q: text
            }
        )
        setLoading()
        const response1 = await fetch(`https://api.github.com/search/users?${params}`);
        const {items, total_Count} = await response1.json();
    

       //setUsers(data);
        //setLoading(false);

        dispatch({
            type: 'GET_USERS',
            payload: items
        })

    }
    //getting a single user
    const getUser = async (login) =>
    {

        setLoading()
        const response1 = await fetch(`https://api.github.com/users/${login}`);
        const data = await response1.json();
        dispatch({
            type: 'GET_USER',
            payload: data
        })

    }

    const clearUsers = () =>
    {
        dispatch(
            {
                type: 'GET_USERS',
                payload: []
            }
        )
    }
    
    return (<GitHubContext.Provider value ={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser
    }}>
        {children}
    </GitHubContext.Provider>
    );
}


export default GitHubContext;