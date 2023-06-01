import dayjs from "dayjs";
import { appointmentArr } from "./dummy";

function Boxes({ weekArr, time }) {
  // let arr = [1, 2, 3, 4, 5, 6, 7];
  // console.log("appoint", appointmentArr);
  // console.log(weekArr)

  // let timeF = time; //09:00-10:00
  // console.log("timef", Number(timeF.split("-")[0].split(":")[0])); //9
  return (
    <div>
      {/* 00:00 */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "5px",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        {/* one */}
        <div
          style={{
            border: "1px solid black",
            height: "50px",
            width: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p style={{ fontSize: "12px" }}>{time}</p>
        </div>
        {/* second */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {weekArr.map((el, i) => {
            // const isAppointment = appointmentArr.find(
            //   (a) =>
            //     dayjs(a.arrivalTime).format("DD-MM-YYYY") ===
            //     dayjs(el).format("DD-MM-YYYY")
            // );
            const isAppointment = appointmentArr.find(
              (a) =>
                dayjs(a.arrivalTime).format("DD-MM-YYYY") ===
                  dayjs(el).format("DD-MM-YYYY") &&
                Number(dayjs(a.arrivalTime).format("HH")) ==
                  Number(time.split("-")[0].split(":")[0])
            );
            console.log("appointemt", isAppointment);

            if (isAppointment) {
              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid black",
                    height: "50px",
                    width: "70px",
                    background: "#D8BFD8"
                  }}
                >
                  {dayjs(el).format("DD-MMM")}, app
                </div>
              );
            }
            return (
              <div
                key={i}
                style={{
                  border: "1px solid black",
                  height: "50px",
                  width: "70px"
                }}
              >
                {dayjs(el).format("DD-MMM")}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Boxes;

// (
//   <div
//     style={{
//       border: "1px solid black",
//       height: "50px",
//       width: "70px"
//     }}
//   >
//     {dayjs(el).format("DD-MMM")}
//   </div>
// )
