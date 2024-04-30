import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserDetail} from "../api/UsersAPI";

function UserDetail() {
    const {id} = useParams();

    const [user, setUser] = useState();

    useEffect(() => {
        getUserDetail(id).then(data => setUser(data));
    }, []);

    return (
        <div className="content-col">
            { user &&
                <>
                    <h1>{user.name}({user.name})</h1>
                    <div>아이디: {user.username}</div>
                    <div>핸드폰번호 : {user.phone}</div>
                    <div>이메일 : {user.email}</div>
                    <div>주소 : {user.city}</div>
                </>
            }


        </div>
    );
}

export default UserDetail;