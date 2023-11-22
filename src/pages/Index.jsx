import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bgVideo from "../asset/video.mp4";
import DatePicker from "../components/DatePicker";
import image1 from "../asset/room2@2x.jpg";
import Card1 from "../components/Card1";
import { useNavigate } from "react-router-dom";

function Index() {
  const [indexSort, setIndexSort] = useState({ people: 0 });
  const route = useNavigate()
  const [enable, setEnable] = useState({ checkIn: false, checkOut: false });
  const [enableDown, setEnableDown] = useState({
    checkIn: false,
    checkOut: false,
  });

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
  return (
    <div className="">
      <Navbar />
      <div className="relative w-full h-screen z-0 bg-dark text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 h-[80vh] w-full object-cover"
        >
          <source src={bgVideo} />
        </video>
        <div className="h-full pt-32 w-full absolute flex justify-center items-center top-0 bg-[#04040481]">
          <div className="w-1/2">
            <h1 className="text-[30px] md:text-[90px] text-center">
              For the Joy <br /> of Life
            </h1>

            <div className="border hidden md:flex w-full h-36 bg-dark  mt-8 border-black relative">
              <div className="h-full w-1/3 border border-black ">
                <button
                  className="checkIn h-full w-full flex justify-center items-center text-3xl text-[#d1d1d1f1] font-thin"
                  onClick={() =>
                    setEnable({ ...enable, checkIn: true, checkOut: false })
                  }
                >
                  {indexSort.checkIn
                    ? indexSort.checkIn.date +
                      "." +
                      monthNames[indexSort.checkIn.month][0] +
                      monthNames[indexSort.checkIn.month][1] +
                      monthNames[indexSort.checkIn.month][2]
                    : "CHECK-IN"}
                </button>
                {enable.checkIn ? (
                  <div className="absolute top-[-18rem] datePicker-checkin">
                    {" "}
                    <DatePicker
                      setVal={(data) => {
                        setEnable({ ...enable, checkIn: false });
                        setIndexSort({ ...indexSort, checkIn: data });
                      }}
                    />{" "}
                  </div>
                ) : null}
              </div>
              <div className="h-full w-1/3 border border-black">
                <button
                  className="checkIn h-full w-full flex justify-center items-center text-3xl text-[#d1d1d1f1] font-thin"
                  onClick={() =>
                    setEnable({ ...enable, checkOut: true, checkIn: false })
                  }
                >
                  {indexSort.checkOut
                    ? indexSort.checkOut.date +
                      "." +
                      monthNames[indexSort.checkOut.month][0] +
                      monthNames[indexSort.checkOut.month][1] +
                      monthNames[indexSort.checkOut.month][2]
                    : "CHECK-OUT"}
                </button>
                {enable.checkOut ? (
                  <div className="absolute top-[-18rem]">
                    {" "}
                    <DatePicker
                      setVal={(data) => {
                        setEnable({ ...enable, checkOut: false });
                        setIndexSort({ ...indexSort, checkOut: data });
                      }}
                    />{" "}
                  </div>
                ) : null}
              </div>
              
              <div onClick={()=>{
                let checkin=indexSort.checkIn,checkOut = indexSort.checkOut
                checkin = `${checkin?.month<10 ? 0+""+checkin?.month :checkin?.month }-${parseInt(checkin?.date)<10 ? 0+""+checkin?.date :checkin?.date}-${checkin?.year}`
                checkOut = `${checkOut?.month<10 ? 0+""+checkOut?.month :checkOut?.month }-${parseInt(checkOut?.date)<10 ? 0+""+checkOut?.date :checkOut?.date}-${checkOut?.year}`
                route("/search/"+checkin+"/"+checkOut)
                console.log(indexSort)
              }} className="h-full w-1/3 border bg-black hover:bg-primary transition duration-500 border-black text-sm flex font-thin text-center justify-center items-center">
                CHECK <br /> AVAILABILITY
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className=" md:flex  md:px-[200px] pt-20 pb-10 w-full h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-[35px]">
            <h6 className="font-[300] text-center text-[#999] roboto text-[14px] mb-6">
              HOTEL THALIA
            </h6>
            <h1 className="text-[1.5rem] text-center font-[300] text-gray-700">
              Here is a tribute to good life!
            </h1>
            <p className="text-center text-slate-400 font-light mt-7">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-full">
            <img src={image1} alt="" className="w-full md:h-full " />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
          <img src={image1} alt="" className="anime1" />
          <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-[300] text-center">
                Private Pool Suite
              </h1>
              <p className="text-center mt-12 mb-12">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et.
              </p>
              <button className="uppercase bg-black px-3 py-2 text-white roboto text-xs pop hover:bg-primary transition duration-300">
                check availibity
              </button>
            </div>
          </div>
          <img src={image1} alt="" className="anime1  md:hidden mt-3" />

          <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-[300] text-center">
                Sea View Suite
              </h1>
              <p className="text-center mt-12 mb-12">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et.
              </p>
              <button className="uppercase bg-black px-3 py-2 text-white roboto text-xs pop hover:bg-primary transition duration-300">
                check availibity
              </button>
            </div>
          </div>
          <img src={image1} alt="" className="anime1 hidden md:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-4 mt-3 w-full md:h-48 p-5  bg-black">
          <div className="otherOptions h-24 md:h-auto">
            <button className="px-4 py-1  bg-[#000000c6]">SPA SALON</button>
          </div>
          <div className="otherOptions h-24 md:h-auto">
            <button className="px-4 py-1 bg-[#000000c6]">RESTAURANT</button>
          </div>
          <div className="otherOptions h-24 md:h-auto">
            <button className="px-4 py-1 bg-[#000000c6]">POOL</button>
          </div>
          <div className="otherOptions h-24 md:h-auto">
            <button className="px-4 py-1 bg-[#000000c6]">ACTIVIES</button>
          </div>
        </div>
      </div>
      <div className="md:h-screen pt-28  md:flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center ">
          <h6 className="text-slate-400">ELEGANT SUITES</h6>
          <hr className="w-12 h-0.5 mt-4 text-primary bg-primary" />
        </div>
        <h1 className="text-center text-3xl mt-4">Unpretentious Luxury</h1>
        <div className="md:grid flex flex-col justify-center items-center md:grid-cols-3 gap-5 mt-16">
          <div className="flex flex-col w-[350px] justify-center items-center">
            <img src="./img/1@2x.svg" alt="" className="w-10" />
            <h1 className="text-xl mt-1">Smoking Free</h1>
            <p className="text-center text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et.
            </p>
            <button className="px-3 mt-3 py-2 bg-black text-white text-xs">
              READ MORE
            </button>
          </div>
          <div className="flex flex-col w-[350px] justify-center items-center">
            <img src="./img/2@2x.svg" alt="" className="w-10" />
            <h1 className="text-xl mt-1">King Beds</h1>
            <p className="text-center text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et.
            </p>
            <button className="px-3 mt-3 py-2 bg-black text-white text-xs">
              READ MORE
            </button>
          </div>
          <div className="flex flex-col w-[350px] justify-center items-center">
            <img src="./img/3@2x.svg" alt="" className="w-10" />
            <h1 className="text-xl mt-1">Yacht Rental</h1>
            <p className="text-center text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et.
            </p>
            <button className="px-3 mt-3 py-2 bg-black text-white text-xs">
              READ MORE
            </button>
          </div>
          <div className="flex flex-col w-[350px] justify-center items-center">
            <img src="./img/4@2x.svg" alt="" className="w-10" />
            <h1 className="text-xl mt-1">Welcome Drink</h1>
            <p className="text-center text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et.
            </p>
            <button className="px-3 mt-3 py-2 bg-black text-white text-xs">
              READ MORE
            </button>
          </div>
          <div className="flex flex-col w-[350px] justify-center items-center">
            <img src="./img/5@2x.svg" alt="" className="w-10" />
            <h1 className="text-xl mt-1">Swimming Pool</h1>
            <p className="text-center text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et.
            </p>
            <button className="px-3 mt-3 py-2 bg-black text-white text-xs">
              READ MORE
            </button>
          </div>
          <div className="flex flex-col w-[350px] justify-center items-center">
            <img src="./img/6@2x.svg" alt="" className="w-10" />
            <h1 className="text-xl mt-1">Food Included</h1>
            <p className="text-center text-gray-400 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et.
            </p>
            <button className="px-3 mt-3 py-2 bg-black text-white text-xs">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      {/* down part */}
      <div className="mt-52 bg-image-2 h-[50vh] w-full text-white flex flex-col justify-center p-5 items-center">
        <div className="border text-xs md:text-sm md:w-2/3 h-20  bg-[#000000b2] grid grid-cols-3 gap-x-4 p-3 items-center mt-8 border-black relative">
          <div className="border h-12 border-black ">
            <button
              className="checkIn h-full w-full flex justify-center items-center text-[#d1d1d1f1] font-thin"
              onClick={() =>
                setEnableDown({ ...enableDown, checkIn: true, checkOut: false })
              }
            >
              {indexSort.checkIn
                ? indexSort.checkIn.date +
                  "." +
                  monthNames[indexSort.checkIn.month][0] +
                  monthNames[indexSort.checkIn.month][1] +
                  monthNames[indexSort.checkIn.month][2]
                : "CHECK-IN DATE"}
            </button>
            {enableDown.checkIn ? (
              <div className="absolute text-white top-[-18rem] datePicker-checkin">
                {" "}
                <DatePicker
                  setVal={(data) => {
                    setEnableDown({ ...enableDown, checkIn: false });
                    setIndexSort({ ...indexSort, checkIn: data });
                  }}
                />{" "}
              </div>
            ) : null}
          </div>
          <div className="border h-12 border-black">
            <button
              className="h-full w-full flex justify-center items-center  text-[#d1d1d1f1] font-thin"
              onClick={() =>
                setEnableDown({ ...enableDown, checkOut: true, checkIn: false })
              }
            >
              {indexSort.checkOut
                ? indexSort.checkOut.date +
                  "." +
                  monthNames[indexSort.checkOut.month][0] +
                  monthNames[indexSort.checkOut.month][1] +
                  monthNames[indexSort.checkOut.month][2]
                : "CHECK-OUT"}
            </button>
            {enableDown.checkOut ? (
              <div className="absolute  text-white top-[-18rem]">
                {" "}
                <DatePicker
                  setVal={(data) => {
                    setEnableDown({ ...enableDown, checkOut: false });
                    setIndexSort({ ...indexSort, checkOut: data });
                  }}
                />{" "}
              </div>
            ) : null}
          </div>
         
          <button className="bg-primary border border-black p-3 h-12">
            Book Now
          </button>
        </div>
      </div>

      <div className="pt-48" id="rooms">
        <div className="flex flex-col justify-center items-center ">
          <h6 className="text-slate-400">LUXURY</h6>
          <hr className="w-12 h-0.5 mt-4 text-primary bg-primary" />
        </div>
        <h1 className="text-center text-3xl mt-4">Our Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-48 pt-12">
          <Card1
            description={
              "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
            }
            head={"Pool Suite"}
            price={130}
            link={"/rooms/pool-suite"}
          />
          <Card1
            description={
              "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
            }
            head={"Small Room"}
            price={80}
            link={"/rooms/small-room"}
          />
          <Card1
            description={
              "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
            }
            head={"Apartment"}
            price={110}
            link={"/rooms/apartment"}
          />
          <Card1
            description={
              "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
            }
            head={"Big Apartment"}
            price={160}
            link={"/rooms/big-apartment"}
          />
        </div>
      </div>

      <div className="h-[50vh] bg-image-2 mt-24 w-full flex justify-center items-center">
        <p className="text-center text-white text-lg">
          "Chilling out on the bed in your hotel room watching television, while
          wearing <br /> your own pajamas, is sometimes the best part of a
          vacation."
          <br />
          <br />
          <br />
          JASON SALVATORE
        </p>
      </div>

      <div className="bg-[#f8f7f7] pb-10">
        <div className="flex flex-col justify-center items-center mt-20 ">
          <h6 className="text-slate-400">EXCELLENT RESTAURANT</h6>
          <hr className="w-12 h-0.5 mt-4 text-primary bg-primary" />
        </div>
        <h1 className="text-center text-5xl mt-4">Dining & Bars</h1>

        <div className=" px-10  lg:px-48 grid grid-cols-1 lg:grid-cols-2 mt-20">
          <img src={image1} alt="" className="anime1" />
          <div className="flex flex-col justify-center items-center bg-white">
            <div className="w-3/4 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-[300] text-center">
                Beach Restaurant
              </h1>
              <p className="text-center mt-12 mb-12">
                Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et.
              </p>
              <button className="uppercase bg-black px-3 py-2 text-white roboto text-xs pop hover:bg-primary transition duration-300">
                Explore
              </button>
            </div>
          </div>
          <img src={image1} alt="" className="anime1 mt-5 lg:hidden" />

          <div className="flex flex-col justify-center items-center bg-white">
            <div className="w-3/4 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-[300] text-center">
                Pool Restaurant
              </h1>
              <p className="text-center mt-12 mb-12">
                Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et.
              </p>
              <button className="uppercase bg-black px-3 py-2 text-white roboto text-xs pop hover:bg-primary transition duration-300">
                explore
              </button>
            </div>
          </div>
          <img src={image1} alt="" className="anime1 hidden lg:block" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-48">
          <h6 className="text-slate-400">GET IN TOUCH</h6>
          <hr className="w-12 h-0.5 mt-4 text-primary bg-primary" />
        </div>
        <h1 className="text-center text-3xl mt-4">Drop Us A Line</h1>

        <div className="grid md:grid-cols-2 gap-3 last-part w-1/2 pt-16" id="contact">
            <div className="flex justify-between h-9 border-b-2 border-[#b1b1b1] "><h1>Address:</h1><p>Avenue Str. 328</p></div>
            <div className="flex justify-between h-9 border-b-2 border-[#b1b1b1] "><h1>Phone:</h1><p>+21 60 374 7537</p></div>
            <div className="flex justify-between h-9 border-b-2 border-[#b1b1b1] "><h1>City:</h1><p>Thessaloniki</p></div>
            <div className="flex justify-between h-9 border-b-2 border-[#b1b1b1] "><h1>Email:</h1><p>info@hotel.com</p></div>
            <div className="flex justify-between h-9 border-b-2 border-[#b1b1b1] "><h1>Check-In:</h1><p>14:00 pm</p></div>
            <div className="flex justify-between h-9 border-b-2 border-[#b1b1b1] "><h1>Check-Out:</h1><p>11:00 am</p></div>
        </div>

        <p className="mt-10 text-gray-500">available at: 8am - 10pm</p>
        <h1 className="text-4xl mt-5 text-gray-500">+21 60 374 7537</h1>
      </div>
    </div>
  );
}

export default Index;
