import React from "react";
import { FaHome } from "react-icons/fa";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
const Home = () =>
{
    return(
        <div>
            <h1 className="text-2xl">
                <UserSearch></UserSearch>
                <UserResults></UserResults>

            </h1>
        </div>
    )
}

export default Home;