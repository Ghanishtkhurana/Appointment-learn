import dayjs from "dayjs";
import { useState } from "react";
import Boxes from "./Boxes";
import Test from "./Test";

function Main() {
  let [weekArr, setWeekArr] = useState([]);
  let date = "2023-05-27T10:30:00+05:30";
  console.log(dayjs(date).format("HH:mm"));

  return (
    <div>
      <Test weekArr={weekArr} setWeekArr={setWeekArr} />
      <Boxes weekArr={weekArr} time={"09:00-10:00"} />
      <Boxes weekArr={weekArr} time={"10:00-11:00"} />
      <Boxes weekArr={weekArr} time={"11:00-12:00"} />
      <Boxes weekArr={weekArr} time={"12:00-13:00"} />
      <Boxes weekArr={weekArr} time={"14:00-15:00"} />
      <Boxes weekArr={weekArr} time={"16:00-17:00"} />
      <Boxes weekArr={weekArr} time={"18:00-19:00"} />
      <Boxes weekArr={weekArr} time={"19:00-20:00"} />
    </div>
  );
}

export default Main;
