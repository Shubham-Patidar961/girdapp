import { useState } from "react";
import { Link } from "react-router-dom";
let emails = [];
const Footer = () => {
  const [email, setemail] = useState("");
  const Subscribe = () => {
    emails.push({ email });
    setemail("");
    console.log(emails);
  };
  return (
    <>
      <div className="footer grid grid-cols-4 grid-rows-1 h-1/2 mt-4 bg-black  gap-4  basis-0 ">
        <div className="p-5">
          <h2 className="text-white text-3xl ">
            News <span className=" text-red-600">Grid</span>
          </h2>
          <p className="text-white ">
            he twe are hwpsmr for thids sode mat doibe thid side d ie xd the he
            twe are hwpsmr for thids sode mat doibe thid side d ie xd the besbt
            sicdeer dpfm r to besbt sicdeer dpfm r to besbt sicdeer dpfm r to
          </p>
        </div>
        <div className="p-5">
          <h2 className="text-white text-3xl ">
            News <span className=" text-red-600">Group </span>
          </h2>
          <p className="text-white">
            loeem ipsmker wwoewmkv to ger the fdoremdop diffnd dfd df{" "}
          </p>
          <input
            placeholder="E-mail "
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="p-2 outline-none mt-2"
          />
          <button
            className=" bg-red-600 text-white p-2 inline-block mt-2 mb-2  "
            onClick={Subscribe}
          >
            Subscribe
          </button>
        </div>
        <div className="p-5">
          <h2 className="text-white text-3xl ">
            Side<span className=" text-red-600"> Links </span>
          </h2>
          <a className="text-white p-2 text-2xl">
            <i class="fab fa-facebook "></i>
          </a>
          <a>
            <i>
              <a className="text-white p-2 text-2xl">
                <i class="fab fa-instagram"></i>
              </a>
            </i>
          </a>
          <a className="text-white p-2 text-2xl">
            <i class="fab fa-twitter-square"></i>
          </a>
        </div>
        <div className="p-5">
          <h2 className="text-white text-3xl ">
            Join our <span className=" text-red-600"> Club </span>
          </h2>
          <p className="text-white">If you are imterdted then joism</p>
          <li className=" bg-red-600 p-3 inline-block text-white list-none mt-2 ">
            <Link to="/contact" className="cursor-pointer">
              Join-Now
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};
export default Footer;
