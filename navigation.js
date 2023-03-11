import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div
        className=" menu1"
        id="skp"
        onClick={() => {
          let element = document.getElementById("skp");
          let element2 = document.getElementById("skp2");
          element.classList.add("menu2");
          element.classList.remove("menu1");
          element2.classList.remove("menu5");
          element2.classList.add("menu4");
        }}
      >
        <li className="bg-white p-4 mr-4 mb-3 text-black">
          {" "}
          <a className="cursor-pointer">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </div>
      <div className=" menu5" id="skp2">
        <li className="bg-white p-4 mr-4 mb-3 text-black hover:mr-0 duration-75">
          {" "}
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
        </li>
        <li className="bg-white p-4 mr-4 mb-3 text-black hover:mr-0 duration-75">
          {" "}
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
        </li>
        <li className="bg-white p-4 mr-4 mb-3 text-black hover:mr-0 duration-75">
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
        </li>
        <li className="bg-white p-4 mr-4 mb-3 text-black hover:mr-0 duration-75">
          <a className="cursor-pointer">Facbook</a>
        </li>
        <li className="bg-white p-4 mr-4 mb-3 text-black hover:mr-0 duration-75">
          <a className="cursor-pointer">Tweeter</a>
        </li>
        <li className="bg-white p-4 mr-4 mb-3 text-black hover:mr-0 duration-75">
          <a className="cursor-pointer">watsapp</a>
        </li>
        <li className="bg-white p-4 mr-4 mb-3 text-black  hover:mr-0 duration-75">
          {" "}
          <a
            className="cursor-pointer ml-4  "
            onClick={() => {
              let element = document.getElementById("skp");
              let element2 = document.getElementById("skp2");
              element.classList.remove("menu2");
              element.classList.add("menu1");
              element2.classList.add("menu5");
              element2.classList.remove("menu4");
            }}
          >
            <i class="fas fa-times"></i>
          </a>
        </li>
      </div>
    </>
  );
};
export default Navigation;
