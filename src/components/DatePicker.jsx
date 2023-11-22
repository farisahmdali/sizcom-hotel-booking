// import { DatePicker, Radio } from 'antd';
import React, { useEffect, useState } from "react";

const DatePicker = ({setVal}) => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const [stateMonth, setMonth] = useState();
  const [stateYear, setYear] = useState();
  const [skip, setSkip] = useState(0);
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

        if (
          (enable1 && month !== today.getMonth()) ||
          (enable1 && date[val] >= currentDate)
        ) {
          elem =
            elem +
            `<td class="enabled-date" id='date${date[val]}'>${date[val]}</td>`;
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
            setVal({month:month,year,date:e.target.innerText})
            // console.log({month:month,year,date:e.target.innerText})
          });
       
      }
    }

    setCurrentDate(monthNames[month] + " " + year);
  };

  useEffect(() => {
    calender();
  }, []);
  return (
    <div>
      <table className=" datepicker-table">
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



export default DatePicker;
