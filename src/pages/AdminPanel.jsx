import React, { useEffect, useState } from "react";
import instance from "../Configs/axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function AdminPanel() {
    const [data,setData] = useState([])
    const [search,setSearch] = useState([])
    const [searchTerm,setSearchTerm]=useState("")
    const route = useNavigate()
  useEffect(() => {
    instance.get("/data", { params: { token: Cookies.get("token") } }).then((res)=>{
        setData(res.data)
        setSearch(res.data)
    }).catch(()=>{
        Cookies.remove("token")
        route("/",{replace:true})
    })
  }, [route]);
  return (
    <div className="min-h-screen w-full bg-black">
        <Toaster/>
        <input type="text" className="m-5 w-1/5 px-2" placeholder="Enter Phone Number" value={searchTerm} onChange={(e)=>{
             setSearchTerm(e.target.value);
             // Filtering data based on search term
             const filteredData = data.filter((item) =>
               item.phone.toLowerCase().includes(e.target.value.toLowerCase())
             );
             setSearch(filteredData);
        }}/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Room
              </th>
              <th scope="col" className="px-6 py-3">
                Booked
              </th>
              <th scope="col" className="px-6 py-3">
                Dates
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {search?.map((x)=>(

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {x?.name}
              </th>
              <td className="px-6 py-4">{x?.address}</td>
              <td className="px-6 py-4">{x?.email}</td>
              <td className="px-6 py-4">{x?.phone}</td>
              <td className="px-6 py-4">
                
                  {x?.amount/100}
              </td>
              <td className="px-6 py-4">{x?.room}</td>
              <td className="px-6 py-4">{x?.rooms}</td>
              <td className="px-6 py-4">
                <ul>
                    {x?.dates?.map((x)=>(
                        <li>{x}</li>
                    ))}
                </ul>
              </td>
              <td className="px-6 py-4"> <button className="w-full py-2 bg-primary text-white" onClick={()=>{
                instance.delete("/delete/"+x?._id,{params:{token:Cookies.get("token")}}).then(()=>{
                    toast.success("Deleted")
                    instance.get("/data", { params: { token: Cookies.get("token") } }).then((res)=>{
                        setData(res.data)
                        setSearch(res.data)
                    })
                })
              }}>Proceed</button></td>

              


            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
