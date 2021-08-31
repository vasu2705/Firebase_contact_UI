import React, { useState } from "react";

import signpic from "../img/3.svg";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const handleinputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = user;

    if (name && email && phone && message) {
      const res = await fetch(
        "https://fir-a24b0-default-rtdb.firebaseio.com/testdatabase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("DATA SUCCESSFULLY SAVED");
      }
    }
     else {
      alert("fill data");
    }
  }
   
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Contact US</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder=" Your number"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="message"
                    autoComplete="off"
                    value={user.message}
                    onChange={handleinputs}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signpic} alt="sing up" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
