import Cards from "./card";
import Cards2 from "./card2";
const Main = () => {
  return (
    <>
      <div class="football">
        <div class=" h-[300px] w-[350px] top-[120px] left-[450px] relative  ">
          {Array(1)
            .fill(" ")
            .map((curent) => {
              return <Cards />;
            })}
        </div>
      </div>
      <Cards2 />
    </>
  );
};
export default Main;
