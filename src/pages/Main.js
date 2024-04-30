import {Link} from "react-router-dom";

function Main() {
    return (
        <Link to="/user">
            <div className="content-row">
                <h1>유저 정보 조회 </h1>
            </div>
        </Link>
    );
}

export default Main;