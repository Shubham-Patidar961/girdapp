import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="about-img  flex h-full bg-blue-400  align-middle justify-center ">
        <div className="h-[400px] w-[800px] top-[90px] relative  bg-white p-8 drop-shadow-2xl border-gray-400 ">
          <h1 className=" text-red-600 font-bold text-8xl p-2 text-center">
            {error.status}
          </h1>
          <h3 className=" text-red-600 font-bold text-4xl p-3 text-center ">
            {error.data}
          </h3>
          <div className=" text-center">
            <li className=" bg-red-600 text-white p-4 m-2  rounded-[50px] inline-block ">
              {" "}
              <Link to="/" className="cursor-pointer">
                Home
              </Link>
            </li>
            <li className="  bg-red-600 text-white p-4 m-2  rounded-[50px] inline-block ">
              {" "}
              <Link to="/about" className="cursor-pointer">
                About
              </Link>
            </li>
            <li className=" bg-red-600 text-white p-4 ml-2  rounded-[50px] inline-block">
              {" "}
              <Link to="/contact" className="cursor-pointer">
                Contact
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;
