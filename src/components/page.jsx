import React, { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
import "../css/button.css";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Page = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    if (window.innerWidth > 768) {
      setShow(false);
    }

    window.addEventListener("resize", handleResize);
    console.log(width);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="w-full h-full mb-2">
      <div className="h-46 w-full bg-white rounded-lg flex items-center">
        <img
          src={Logo}
          className="object-contain md:h-40 h-32 md:w-1/5 w-32 lg:w-52"
          alt="logo"
        />
        <div className="flex flex-col md:flex-row justify-center w-4/5 lg:w-11/12 md:pt-0">
          {width > 600 ? (
            <div className="block font-serif">
              <p className="text-blue-800 font-semibold text-2xl">
                Indian Institute of Information Technology, Design and
                Manufacturing
              </p>
              <p className="text-blue-800 font-semibold text-2xl">
                Kancheepuram, Chennai - 600127
              </p>
              <p className="text-blue-600 font-bold">
                (An Institute of National Information Importance Fully Funded by
                Govt of India)
              </p>
            </div>
          ) : (
            <div className="block font-serif">
              <p className="text-blue-800 text-2xl font-bold">
                IIITDM Kancheepuram
              </p>
              <p className="text-blue-800 font-bold text-2xl">
                Chennai - 600127
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-red-600 w-99/100 h-1 mr-1 rounded-lg ml-1"></div>
      {width <= 768 && (
        <div className="flex justify-start m-4 text-2xl">
          <button onClick={() => setShow(!show)}>
            {show === true ? <IoReorderThree /> : <ImCross />}
          </button>
        </div>
      )}
      <div className="flex mt-6 mr-4 ml-4">
        {width >= 768 ? (
          <div className="flex flex-col w-2/5  text-white font-serif font-semibold mt-10 justify-center">
            <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">
              Notification
            </button>
            <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">
              Register
            </button>
            <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto ">
              Login
            </button>
            <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">
              Contact Us
            </button>
          </div>
        ) : (
          <div>
            {show && (
              <div className="absolute bg-slate-300 z-50 w-11/12 mt-10 ml-3 p-4 rounded-lg items-center ">
                <div className="flex flex-col text-white font-serif font-semibold justify-center">
                  <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">
                    Notification
                  </button>
                  <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">
                    Register
                  </button>
                  <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto ">
                    Login
                  </button>
                  <button className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        <div className={`md:w-3/5 w-full ml-10 mr-10 ${show ? "blur-sm" : ""}`}>
          <div>
            <p className="text-2xl font-serif font-bold blu">
              Faculty Recruitment Portal
            </p>
            <p className="font-serif font-semibold">
              (Use registered Email-id to Login into the portal)
            </p>
          </div>
          <div className="mt-8 md:w-4/5 w-full ml-auto mr-auto">
            <div className="bg-slate-200 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-2 w-full py-3 text-white font-bold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 font-serif"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="font-serif mt-3">
                <a href="/" className="underline text-blue-800">
                  Forget Password
                </a>
              </div>
            </div>
          </div>
          <div className="flex mt-6 font-serif font-semibold justify-center">
            <p>
              If you don't have a Account, Please{" "}
              <a href="/" className="underline text-blue-800 font-bold">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="width-full h-0.5 bg-zinc-400 ml-1 mr-1 mt-24"></div>
      <footer
        className={`flex justify-center items-center mt-4 font-serif font-thin ${
          show ? "blur-sm" : ""
        }`}
      >
        Supported Browser: Google Chrome and Mozilla Firefox (Latest Version)
      </footer>
    </div>
  );
};

export default Page;
