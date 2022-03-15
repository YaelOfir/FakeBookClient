import { Link } from "react-router-dom";
const UserInfo = () => {
  return (
    <div>
      UserInfo
      <button >
        <Link to="/Profile/ListOfFriends">Friend List</Link>
      </button>
    </div>
  );
};

export default UserInfo;
