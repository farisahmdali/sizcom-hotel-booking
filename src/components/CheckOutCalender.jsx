// import { DatePicker, Radio } from 'antd';
import React, { useCallback, useEffect, useState } from "react";

const CheckOutCalender = ({addDate,removeDate,Data}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = []
  const [currentDate, setCurrentDate] = useState();
  const [stateMonth, setMonth] = useState();
  const [stateYear, setYear] = useState();
  const [skip, setSkip] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const monthsAndDays = {
    January: 31,
    February: 28, // Leap year has 29 days
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calender = (
    month = new Date().getMonth(),
    year = new Date().getFullYear()
  ) => {
    setMonth(month);
    setYear(year);
    const date = data
    const week = new Date(
      `${month + 1 < 10 ? "0" + (month + 1) : month + 1}/01/${year}`
    ).getDay();
    const currentDate = new Date().getDate();
    console.log(month, week, year);
    const datebody = document.getElementById("date-body");
    let j = 1;
    for (let i = week; i <= monthsAndDays[monthNames[month]] + week; i++) {
      date[i] = j;
      j++;
    }
    j = 0;
    for (let i = week - 1; i >= 0; i--) {
      date[i] = monthsAndDays[monthNames[month === 0 ? 11 : month - 1]] - j;
      j++;
    }
    j = 1;
    for (let i = monthsAndDays[monthNames[month]] + week; i <= 41; i++) {
      date[i] = j;
      j++;
    }
    let elem = "";
    let val = 0;
    let enable1 = false;
    let enable2 = false;
    let today = new Date();
    for (let i = 1; i <= 6; i++) {
      elem = elem + "<tr>";
      for (let j = 0; j < 7; j++) {
        if (date[val] === 1 && !enable2) {
          enable1 = true;
        }
        const dateSort = `${month+1}/${date[val]}/${year}`
        console.log(Data?.[dateSort])
        if (
          (enable1 && month !== today.getMonth() && (Data?.[dateSort]<10 ||!Data?.[dateSort]) ) ||
          (enable1 && date[val] >= currentDate && (Data?.[dateSort]<10 ||!Data?.[dateSort]) )
        ) {
            if(Data?.[dateSort]>7){
                elem =
                elem +
                `<td class="enabled-date" style='color:#f7bf07' id='date${date[val]}'>${date[val]}</td>`
            }else{
                elem =
                elem +
                `<td class="enabled-date" id='date${date[val]}'>${date[val]}</td>`;
            }
        } else {
          elem = elem + `<td id='date${date[val]}'>${date[val]}</td>`;
        }
        if (enable1 && date[val] === monthsAndDays[monthNames[month]]) {
          enable1 = false;
          enable2 = true;
        }
        val++;
      }
      elem = elem + "</tr>";
    }
    console.log(date);
    datebody.innerHTML = elem;
    enable1 = false;
    enable2 = false;

    const a = document.getElementsByClassName("enabled-date");
    console.log(a)
    for (let i = 0; i < a.length; i++) {
        const b=a[i]
    //   console.log(b)
      if (b) {
       
          b.addEventListener("click", (e) => {
            console.log(e.srcElement.className)
            if(e.srcElement.className === "bg-red-600"){
                e.srcElement.className = "enabled-date"
                removeDate(`${month+1}/${e.target.innerText}/${year}`)
            }else{
                e.currentTarget.className = "bg-red-600"
                addDate(`${month+1}/${e.target.innerText}/${year}`)
            }
          });
       
      }
    }

    setCurrentDate(monthNames[month] + " " + year);
  };

  useEffect(() => {
    calender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);
  return (
    <div>
      <table className=" datepicker-table text-white">
        <thead>
          <tr>
            {skip > 0 ? (
              <th
                className="cursor-pointer transition hover:bg-primary"
                onClick={() => {
                  if (stateMonth > 0) {
                    setCurrentDate(
                      monthNames[stateMonth - 1] + " " + stateYear
                    );
                    calender(stateMonth - 1, stateYear);
                  } else {
                    setCurrentDate(monthNames[11] + " " + (stateYear - 1));
                    calender(11, stateYear - 1);
                  }
                  setSkip(skip - 1);
                }}
              >
                «
              </th>
            ) : (
              <th></th>
            )}
            <th colSpan={5}>{currentDate}</th>
            <th
              className="cursor-pointer transition hover:bg-primary"
              onClick={() => {
                if (stateMonth < 11) {
                  setCurrentDate(monthNames[stateMonth + 1] + " " + stateYear);
                  calender(stateMonth + 1, stateYear);
                } else {
                  setCurrentDate(monthNames[0] + " " + (stateYear + 1));
                  calender(0, stateYear + 1);
                }
                setSkip(skip + 1);
              }}
            >
              »
            </th>
          </tr>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody id="date-body">
         
        </tbody>
      </table>
    </div>
  );
};



export default CheckOutCalender;
