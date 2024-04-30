import {useEffect, useState} from "react";
import {getUserList} from "../api/UsersAPI";
import UserItem from "../components/UserItem";

function UserList() {

    const [userList , setUserList] = useState();

    useEffect(() => {
        getUserList().then(data => setUserList(data));
    }, []);

    return (
        <div className="content-row">
            { userList && userList.map(user => <UserItem key={user.id} user={user}/>)}
        </div>
    );
}

export default UserList;