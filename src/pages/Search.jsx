import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../Configs/axios";
import Card1 from "../components/Card1";
import bgVideo from "../asset/video.mp4";
import Navbar from "../components/Navbar";

function Search() {
  let { checkin, checkout } = useParams();
  const [enable, setEnable] = useState({});

  useEffect(() => {
    checkin = `${checkin[0]}${checkin[1]}/${checkin[3]}${checkin[4]}/${
      checkin[6] + checkin[7] + checkin[8] + checkin[9]
    }`;
    checkout = `${checkout[0]}${checkout[1]}/${checkout[3]}${checkout[4]}/${
      checkout[6] + checkout[7] + checkout[8] + checkout[9]
    }`;

    instance.get("/search", { params: { checkin, checkout } }).then((res) => {
      setEnable(res.data.enable);
    });
  }, []);

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
          </div>
        </div>
      </div>

      <div className="pt-48" id="rooms">
        <div className="flex flex-col justify-center items-center ">
          <h6 className="text-slate-400">LUXURY</h6>
          <hr className="w-12 h-0.5 mt-4 text-primary bg-primary" />
        </div>
        <h1 className="text-center text-3xl mt-4">Our Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-48 pt-12">
          {enable?.pool ? (
            <Card1
              description={
                "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
              }
              head={"Pool Suite"}
              price={130}
              link={"/rooms/pool-suite"}
            />
          ) : null}
          {enable?.small ? (
            <Card1
              description={
                "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
              }
              head={"Small Room"}
              price={80}
              link={"/rooms/small-room"}
            />
          ) : null}

          {enable?.apart ? (
            <Card1
              description={
                "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
              }
              head={"Apartment"}
              price={110}
              link={"/rooms/apartment"}
            />
          ) : null}
          {enable?.big ? (
            <Card1
              description={
                "Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."
              }
              head={"Big Apartment"}
              price={160}
              link={"/rooms/big-apartment"}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Search;
