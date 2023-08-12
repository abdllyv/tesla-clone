/* ---------------------------------- React --------------------------------- */
import { useContext, useEffect, useState } from "react";

/* ---------------------------------- Axios --------------------------------- */
import axios from "axios";

/* --------------------------------- Router --------------------------------- */
import { Link } from "react-router-dom";
import { ShopContext } from "../utils/ShopContext";

const Profile = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [user, setUser] = useState([]);

  /* --------------------------------- Context -------------------------------- */
  const { setToken } = useContext(ShopContext);

  /* ------------------------------- Check Login ------------------------------ */
  useEffect(() => {
    const checkLogin = async () => {
      await axios
        .post(process.env.REACT_APP_CHECK_LOGIN, {
          token: JSON.parse(localStorage.getItem("token")),
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data);
          }
        })
        .catch((err) => {
          setToken(false);
        });
    };
    checkLogin();
  }, [setToken]);
  return (
    <main>
      <section className="profile">
        <div className="profile-container">
          <div className="general-info">
              <h2 className="title">Profile Settings</h2>
            <div className="card-box">
              <div className="card">
                <span className="name">Full Name</span>
                <h4 className="full-name">
                  {user.name} {user.surname}
                </h4>
                <Link>Edit</Link>
              </div>
              <div className="card">
                <span className="name">Address</span>
                <h4 className="full-name">
                  <Link>Add New</Link>
                </h4>
              </div>
              <div className="card">
                <span className="name">Contact Phone Number</span>
                <h4 className="full-name">
                  <Link>Add New</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="content-block">
            <Link>Shareholder Preferences</Link>
          </div>
          <div className="specific-info">
            <h2 className="title">Security</h2>
            <div className="card-box">
              <div className="card">
                <span className="name">Email</span>
                <h4 className="full-name">{user.email}</h4>
                <Link>Edit</Link>
              </div>
              <div className="card">
                <span className="name">Password</span>
                <h4 className="full-name password">*******</h4>
                <Link to="/otp">Reset</Link>
              </div>
              <div className="card">
                <span className="name">Multi-factor Authentication</span>
                <h4 className="full-name">
                  Add an additional layer of security to your account
                </h4>
                <Link>Manage</Link>
              </div>
            </div>
          </div>
          <div className="content-block">
            <Link>Manage Third Party Apps</Link>
          </div>
          <div className="content-block">
            <Link>Delete Account</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
