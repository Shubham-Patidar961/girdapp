import Cards from "./card";
import Cards2 from "./card2";
const Main = () => {
  return (
    <>
      <div class="football">
        <div class="  grid gap-0 grid-cols-2 grid-rows-1 ">
          {Array(2)
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
