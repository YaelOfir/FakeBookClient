import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      LogIn
      <div>
        Not Registered?
        <Link to="/SignUpPage">SignUp</Link>
      </div>
    </div>
  );
};

export default LogIn;
