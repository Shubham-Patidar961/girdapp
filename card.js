import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <>
      <div className=" sports-1 mini:hidden md:hidden  relative  p-4  align-middle  bg-white  rounded-md opacity-75 hover:opacity-100 hover:ease-in duration-300">
        <p className="mt-2 mb-2">
          lorsdfncfdv dfvdfvndfv fdvdfjkvndf vfdvnkdfnvkdf v ndfjnvdfv
          fkdvndfnvjadfnvkdjv lorm allamfd fdv vddv dgs g gb gsbfgbfg b gbfg b
          fg bg b b gb gbfgbfgb gfb fg bfggggggg
        </p>
        <div>
          <li className=" bg-red-600 p-3 inline-block text-white list-none mt-2 ">
            <Link to="/about" className="cursor-pointer">
              Read More
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};
export default Cards;
