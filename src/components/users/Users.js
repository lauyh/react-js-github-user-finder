import React, { useContext } from "react";
import UserItems from "./UserItems";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/githubContext";

function userComponent(users) {
    return (
        <div style={userStyle}>
            {users.map((user) => (
                <UserItems key={user.id} user={user} />
            ))}
        </div>
    );
}

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    return loading ? <Spinner /> : userComponent(users);
};

// css style
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

export default Users;
