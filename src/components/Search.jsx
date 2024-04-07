import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/IpAdressSlice";
// import arrow from "../../public/images/icon-arrow.svg";
function testIp(ip) {
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(ip);
}
export default function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    if (!search) return;
    if (testIp(search)) dispatch(fetchData({ ip: search }));
    else alert("Enter a valid IP");
  }
  return (
    <div className="text-center">
      <h1 className="text-white py-3 fs-4">IP Adress Tracker</h1>
      <div className="row search-box m-auto">
        <input
          className="col-10 py-3 py-sm-2  rounded-start border-0"
          placeholder="Search for any IP address or domain"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-dark col-1 text-white rounded-end border-0"
          onClick={handleClick}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
