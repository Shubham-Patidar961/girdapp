import Cardscontain from "./utility/classcontan";
const Cards2 = () => {
  return (
    <>
      <h2 class=" text-red-600 font-bold text-xl ">EDITOR</h2>
      <div class="grid  grid-cols-3 grid-rows-3 gap-6  ">
        <div class="   w-full bg-black h-80 max-h-full text-white p-5 ">
          <h1 class="inline-block bg-pink-600 rounded pl-2 pr-2 pt-1 pb-1 ">
            TECNOLOGY
          </h1>
          <Cardscontain />
        </div>
        <div class=" sports  w-full bg-black h-80 max-h-full p-5  ">
          <h1 class="inline-block bg-red-600 rounded pl-2 pr-2 pt-1 pb-1 text-white">
            SPORTS
          </h1>
        </div>
        <div class="  w-full  bg-red-600 h-80 max-h-full p-5 ">
          <h1 class="inline-block bg-blue-700 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
            SPORTS
          </h1>
          <Cardscontain />
        </div>
        <div class="  w-full bg-gray-800 h-80 max-h-full ">
          <div class="tecnology-2 p-5">
            <h1 class="inline-block bg-blue-700 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
              ENTERTANMENT
            </h1>
          </div>
          <div>
            <h2 className="font-bold text-xl pt-2 pb-1 text-white ">
              LOREM IPSUM WUM K SNUFS SKJKSM DFDFJVO WE SFDER AHER E THOO DERF
            </h2>
          </div>
        </div>
        <div class="  w-full bg-black h-80 max-h-full p-5 ">
          <h1 class="inline-block bg-green-500 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
            SPORTS
          </h1>
          <Cardscontain />
        </div>
        <div class=" entertanment  w-full bg-black h-80 max-h-full p-5">
          <div>
            <h1 class="inline-block bg-pink-600 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
              SPORTS
            </h1>
          </div>
          <div>
            <h2 className="font-bold text-xl pt-2 pb-1 text-white bg-black p-2  ">
              LOREM IPSUM WUM K SNUFS SKJKSM DFDFJVO WE SFDER AHER E THOO DERF
            </h2>
            <p className="mt-2 mb-2 text-white bg-black p-2 ">
              lorsdfncfdv dfvdfvndfv fdvdfjkvndf vfdvnkdfnvkdf v ndfjnvdfv
              fkdvndfnvjadfnvkdjv lorm allamfd fdv vddv dgs g gb gsbfg
            </p>
          </div>
        </div>

        <div class="  w-full bg-black h-80 max-h-full p-5  ">
          <h1 class="inline-block bg-blue-600 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
            SPORTS
          </h1>
          <Cardscontain />
        </div>
        <div class=" tecnology   w-full h-80 max-h-full p-5 ">
          <h1 class="inline-block bg-pink-600 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
            SPORTS
          </h1>
        </div>
        <div class="  w-full bg-black h-80 max-h-full p-5  ">
          <h1 class="inline-block bg-red-600 rounded pl-2 pr-2 pt-1 pb-1 text-white ">
            SPORTS
          </h1>
          <Cardscontain />
        </div>
      </div>
    </>
  );
};
export default Cards2;
