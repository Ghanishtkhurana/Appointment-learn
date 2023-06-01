import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Test({ weekArr, setWeekArr }) {
  let [sunday, setSunday] = useState("");
  let [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    let curDate = dayjs().format();
    setCurrentDate(curDate);
    let curDateNum = dayjs().day();
    let sundate = dayjs().subtract(curDateNum, "day").format();
    setSunday(sundate);
  }, []);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      let date = dayjs(sunday).add(i, "day").format();
      arr.push(date);
      setWeekArr(arr);
    }
  }, [sunday]);

  const hanldeTheMinus = () => {
    let updateDate = dayjs(sunday).subtract(7, "day");
    setSunday(updateDate);
  };

  const handleTheAdd = () => {
    let updateDate = dayjs(sunday).add(7, "day");
    setSunday(updateDate);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "10px",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1px solid plum",
          flexDirection: "column",
          height: "50px",
          width: "70px",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span> jump </span>
        <div style={{ display: "flex" }}>
          <button onClick={hanldeTheMinus}>{"<"}</button>
          <button onClick={handleTheAdd}>{">"}</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {weekArr &&
          weekArr.length >= 1 &&
          weekArr.map((el, i) =>
            el === currentDate ? (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  backgroundColor: "lightgreen",
                  border: "1px solid plum",
                  height: "50px",
                  width: "70px"
                }}
              >
                <span style={{ color: "green" }}>
                  {dayjs(el).format("ddd")}
                </span>
                <span style={{ color: "green" }}>{dayjs(el).format("DD")}</span>
              </div>
            ) : (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "1px solid plum",
                  height: "50px",
                  width: "70px"
                }}
              >
                <span>{dayjs(el).format("ddd")}</span>
                <span>{dayjs(el).format("DD")}</span>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default Test;

// (
//   <div
//     key={i}
//     style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//   >
//     <span>{dayjs(el).format("ddd")}</span>
//     <span>{dayjs(el).format("DD")}</span>
//   </div>
// )
