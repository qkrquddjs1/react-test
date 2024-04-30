import {Link} from "react-router-dom";


function UserItem({user}) {
    return (
        <Link to={`/user/${user.id}`}>
            <div className="item">
                <h3>이름 : {user.name}</h3>
                <h3>전화번호 : {user.phone}</h3>
                <h3>이메일 : {user.email}</h3>
            </div>
        </Link>
    );
}

export default UserItem;