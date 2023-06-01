import dayjs from "dayjs";
import { useState } from "react";

function TakeDate() {
  let date = "2023-05-26T09:30:00+05:30";
  // let findTime = dayjs(date).format("HH-mm") //10:30
  let findTime = Number(dayjs(date).format("HH")); //10
  console.log("fineTime", findTime);
  let timeF = "09:00-10:00";
  let timeFun = Number(timeF.split("-")[0].split(":")[0]);
  console.log("timefun", Number(timeF.split("-")[0].split(":")[0])); //9

  if (findTime == timeFun) {
    console.log("true");
  } else {
    console.log("false");
  }
  // const [dateStr, setDateStr] = useState("");
  // console.log("datestr", dateStr);
  // 20-05-2023
  //2023-05-23
  // let date = dayjs().format("YYYY-MM-DD");
  // let time = "09:30";
  // let time1 = time.split(":")[0];
  // let time2 = time.split(":")[1];
  // let finalStr = dayjs(date).set("hour", time1).set("minute", time2).format();
  // console.log("finalStr", finalStr);

  return (
    <div>
      {/* <input type="date" value="23-05-2020" onChange={(e) => setDateStr(e.target.value)} /> */}
    </div>
  );
}

export default TakeDate;
