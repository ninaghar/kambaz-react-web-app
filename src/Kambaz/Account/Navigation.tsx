import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();

  const getClass = (path: string) =>
    `list-group-item border-0 ${
      pathname.includes(path) ? "active" : "text-danger"
    }`;

  return (
    <div id="wd-account-navigation" className="list-group wd fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className={getClass("/Signin")}
      >
        Signin
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-account-signup-link"
        className={getClass("/Signup")}
      >
        Signup
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-account-profile-link"
        className={getClass("/Profile")}
      >
        Profile
      </Link>
    </div>
  );
}


// import { Link } from "react-router-dom";
// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation">
//       <Link to={`/Kambaz/Account/Signin`}  > Signin  </Link> <br/>
//       <Link to={`/Kambaz/Account/Signup`}  > Signup  </Link> <br/>
//       <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/>
//     </div>
// );}
