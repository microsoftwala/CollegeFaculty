import React, { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
import "../css/button.css";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Page = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      setHeight(window.innerHeight);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen mb-32">
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
            {!show === true ? <IoReorderThree /> : <ImCross />}
          </button>
        </div>
      )}
      <div className="flex mt-6 mr-4 ml-4">
        {width >= 768 ? (
          <div className="flex flex-col w-2/5  text-white font-serif font-semibold mt-10 justify-center">
            <a
              href="/"
              target="_blank"
              className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto"
            >
              Notification
            </a>
            <a
              href="/"
              target="_blank"
              className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto"
            >
              Register
            </a>
            <a
              href="/"
              target="_blank"
              className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto "
            >
              Login
            </a>
            <a
              href="/"
              target="_blank"
              className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto"
            >
              Contact Us
            </a>
          </div>
        ) : (
          <div>
            {show && (
              <div className="absolute bg-slate-300 z-50 w-11/12 mt-10 p-4 rounded-lg items-center ">
                <div className="flex flex-col text-white font-serif font-semibold justify-center">
                  <a
                    href="/"
                    target="_blank"
                    className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto"
                  >
                    Notification
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto"
                  >
                    Register
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto "
                  >
                    Login
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
        <div className={`md:w-3/5 w-full  ${show ? "blur-sm" : ""}`}>
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
      {height && (
        <footer
          className={`fixed bottom-0 left-0 p-2 w-full ${
            show ? "blur-sm" : ""
          } bg-slate-800`}
          style={{ display: isScrolled ? "block" : "none" }}
        >
          <div className="flex justify-center mt-4 text-white font-serif">
            Supported Browser: Google Chrome and Mozilla Firefox (Latest
            Version)
          </div>
        </footer>
      )}
    </div>
  );
};

export default Page;
