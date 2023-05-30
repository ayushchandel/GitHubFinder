import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserItem from "./UserItem";
import GitHubContext from "../../context/Github/GitHubContext";
import { useContext } from "react";

const UserResults = () =>
{

   const {users, loading, isUsers} = useContext(GitHubContext);

   /*
    useEffect(() =>
    {
        fetchUsers();
    },[])
    */
   
    if(loading==false)
    {
    return( 
        <div>
        <div className="grid grid-cols-1 gap-8xl:grid-cols-4 lg:grid-cols-3 md:gid-cols-2">
           {
            users.map((user) =>
            (
               <UserItem id={user.id} user = {user}></UserItem>
            ))
           }
        </div>
        <div>
            {
                isUsers && <div> No User Found</div>
                    
                
            }
        </div>
        </div>
        
    )
        }
        else
        {
            return(
                <div>loading....</div>
            )
        }
}
export default UserResults;