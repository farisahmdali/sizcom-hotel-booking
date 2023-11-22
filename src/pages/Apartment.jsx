import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import image from "../asset/room2@2x.jpg";
import CheckOutCalender from "../components/CheckOutCalender";
import useRazorpay from "react-razorpay";
import instance from "../Configs/axios";
import toast, { Toaster } from "react-hot-toast";
import Card1 from "../components/Card1";

function Apartment() {
  const [indexSort, setIndexSort] = useState({ people: 0 });
  const [Razorpay] = useRazorpay();
  const [id, setId] = useState("");
  const [roomsNeeded, setRoomsNeeded] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [enableDown, setEnableDown] = useState({
    checkIn: false,
    checkOut: false,
  });
  const [cost, setCost] = useState(0);
  const [detailsofRoom, setdetailsofRoom] = useState({});
  const [bookedDate, setBookedDate] = useState([]);
  const [details, setDetails] = useState({ dates: [], rooms: 1 });

  useEffect(() => {
    instance
      .get("/roomDetails", { params: { type: "Apartment" } })
      .then((res) => {
        console.log(res.data.count);
        setdetailsofRoom(res.data.count);
      });
  }, []);

  const paymentGateWay = (order, id) => {
    const options = {
      key: "rzp_test_SZISjiHbBlmqCl", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Thalia",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        instance.post("/paymentSuccess", { id, order }).then(() => {
          toast.success("Your Successfuly Booked");
          setDetails({});
        });
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  useEffect(() => {
    const payment = 110 * 100 * details.dates.length * details.rooms || 0;
    console.log(details.dates.length, details.rooms);
    setCost(payment);
    let val = 10;
    for (let i = 0; i < details.dates.length; i++) {
      if (10 - detailsofRoom[details.dates[i]] < val) {
        val = 10 - detailsofRoom[details.dates[i]];
      }
    }
    const a = [];
    for (let i = 1; i <= val; i++) {
      a.push(i);
    }
    setRoomsNeeded(a);
  }, [details, detailsofRoom]);

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
    <div className="flex flex-col">
      <Toaster />
      <Navbar />
      <div className="bg-image-2 w-full h-screen md:h-[50vh] relative">
        <div className="h-full w-full text-white flex justify-center items-center bg-[#000000a1]">
          <h1 className="text-5xl sticky top-48">Rooms Gallery</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-5 md:grid-cols-3 lg:grid-cols-6 p-16 bg-[#121212fa]">
        <div className="flex flex-col justify-center items-center">
          <img src="/img/1@2x.svg" alt="icon" srcset="" className="ulta h-10" />
          <h1 className="text-xs text-white mt-3">NO SMOKING</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/img/2@2x.svg" alt="icon" srcset="" className="ulta h-10" />
          <h1 className="text-xs text-white mt-3">BIG BEDS</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/img/3@2x.svg" alt="icon" srcset="" className="ulta h-10" />
          <h1 className="text-xs text-white mt-3">YACHT RIDING</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/img/4@2x.svg" alt="icon" srcset="" className="ulta h-10" />
          <h1 className="text-xs text-white mt-3">FREE DRINKS</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/img/5@2x.svg" alt="icon" srcset="" className="ulta h-10" />
          <h1 className="text-xs text-white">SWIMMING POOL</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/img/6@2x.svg" alt="icon" srcset="" className="ulta h-10" />
          <h1 className="text-xs text-white">ROOM BREAKFAST</h1>
        </div>
      </div>
      <div className=" w-full p-10 md:flex flex-col md:flex-row justify-center items-enter mt-14">
        <div className="md:w-1/2 w-full flex flex-col">
          <img src={image} alt="" className="anime2 w-full" />
          <div className="flex w-full mt-4">
            <img src={image} alt="" className="w-1/5" />
            <img src={image} alt="" className="w-1/5" />
            <img src={image} alt="" className="w-1/5" />
            <img src={image} alt="" className="w-1/5" />
            <img src={image} alt="" className="w-1/5" />
          </div>
          <h1 className="text-2xl mt-9">Description</h1>
          <p className="text-slate-400">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>
          <h1 className="text-2xl mt-9">Overview</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <h1 className="flex ">
              Room size: <p className="text-gray-500"> 47 - 54 sq m</p>
            </h1>
            <h1 className="flex ">
              Bed size: <p className="text-gray-500"> King and regular</p>
            </h1>
            <h1 className="flex ">
              Occupancy: <p className="text-gray-500"> 2 Adult 1 Child </p>
            </h1>
            <h1 className="flex ">
              Location: <p className="text-gray-500"> Big room 2nd floor</p>
            </h1>
            <h1 className="flex ">
              View: <p className="text-gray-500"> Sea view</p>
            </h1>
            <h1 className="flex ">
              Room service: <p className="text-gray-500"> Yes</p>
            </h1>
            <h1 className="flex ">
              Smoking: <p className="text-gray-500">No Smoking</p>
            </h1>
          </div>
          <h1 className="text-2xl mt-9">Features</h1>
          <p className="text-slate-400">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>
        </div>
        <div className="md:ms-5 mt-5 md:mt-0 md:w-1/2 w-full flex flex-col md:block bg-black  justify-center items-center">
          <CheckOutCalender
            Data={detailsofRoom}
            addDate={(data) => {
              const date = details?.dates;
              date.push(data);
              setDetails({ ...details, dates: [...date] });
            }}
            removeDate={(data) => {
              const date = details?.dates;
              const index = date.indexOf(data);
              date.splice(index, 1);
              setDetails({ ...details, dates: [...date] });
            }}
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              instance
                .get("/paymentOrder", {
                  params: {
                    amount: cost,
                    data: { ...details, amount: cost, room: "Apartment" },
                  },
                })
                .then((res) => {
                  paymentGateWay(res.data.orderG, res.data.id);
                });
            }}
            className="grid w-full md:w-auto grid-cols-1 gap-4 p-3 bg-black"
          >
            <input
              type="text"
              placeholder="FullName"
              value={details?.name}
              required
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
            />
            <textarea
              placeholder="Address"
              id=""
              rows="3"
              value={details?.address}
              required
              onChange={(e) => {
                setDetails({ ...details, address: e.target.value });
              }}
            ></textarea>
            <input
              type="number"
              placeholder="Phone Number"
              value={details?.phone}
              className="hide-number-spinners"
              required
              onChange={(e) => {
                setDetails({ ...details, phone: e.target.value });
              }}
            />
            <input
              type="email"
              placeholder="email"
              required
              value={details?.email}
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
            />
            <select
              name=""
              id=""
              value={details.rooms}
              required
              onChange={(e) => {
                setDetails({ ...details, rooms: e.target.value });
              }}
            >
              <option selected>Rooms</option>
              {roomsNeeded?.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
            <button className="bg-primary text-white py-2 " type="submit">
              CheckOut ₹{cost / 100}
            </button>
          </form>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-10 gap-3">
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
          head={"Big Apartment"}
          price={160}
          link={"/rooms/big-apartment"}
        />
      </div>
    </div>
  );
}

export default Apartment;
