import React from "react";
import { useSelector } from "react-redux";
export default function DataPreview() {
  const { address, status, error } = useSelector((store) => store.ip);

  return (
    <div>
      <div className="container bg-white border rounded position-absolute mt-4 w-50 shadow p-4 z-index">
        {status === "loading" ? (
          <p>Loading....</p>
        ) : status === "" ? (
          <p className="text-center w-100">
            Start by entering your IP Adderss 🖐
          </p>
        ) : !address.location.city ? (
          <p className="text-center w-100">
            This IP is not related to a country 👎
          </p>
        ) : error ? (
          <p className="text-center w-100">
            Error occured while loading data 😢
          </p>
        ) : (
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="custom-border">
                <p className="text-secondary mb-1 title">Ip address</p>
                <p className="mb-1 font-weight-bold pe-2">{address?.ip}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="custom-border">
                <p className="text-secondary mb-1 title">Loaction</p>
                <p className="mb-1 font-weight-bold pe-2">
                  {address?.location.country}, {address?.location.city}
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="custom-border">
                <p className="text-secondary mb-1 title">Time zone</p>
                <p className="mb-1 font-weight-bold pe-2">
                  UTC {address?.location.timezone}
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <p className="text-secondary mb-1 title">ISP</p>
              <p className="mb-1 font-weight-bold pe-2">{address?.isp}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
