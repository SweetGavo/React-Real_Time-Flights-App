import React, { useState, useEffect } from "react";
import axios from "axios";
import filter from "minimatch";
import "../../src/index.css";

const allFlights =
  "https://opensky-network.org/api/flights/all?begin=1682602755&end=1682609665";
const Flights = () => {
  const [flight, setFlight] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllFlights();
    handleClick();
  }, []);

  const handleClick = () => {
    return setShow(setFlight);
  };
  const getAllFlights = async () => {
    try {
      const allFlightsArr = (await axios.get(allFlights)).data;
      console.log(allFlightsArr);
      setFlight(allFlightsArr);
    } catch (error) {
      console.log(`The error is ${error}`);
    }
  };

  return flight ? (
    flight.map((item) => {
      if (
        item.estArrivalAirport !== null &&
        item.estDepartureAirport !== null
      ) {
        return (
          <div
            className={"container m-4"}
            style={{ textAlign: "center", color: "white" }}
          >
            <div className={"row bg-dark"}>
              <div className={"col-sm"}>
                <h2>AIRCRAFT</h2>
                <br />
                <h4>{item.icao24}</h4>
              </div>
              <div className={"col-sm"}>
                <h2>TIME</h2>
                <br />
                <h4>
                  {new Date(item.lastSeen * 1000).toString().slice(16, 25)}
                </h4>
              </div>
              <div className={"col-sm"}>
                <h2>ARRIVING</h2>
                <br />
                <h4>{item.estArrivalAirport}</h4>
              </div>
              <div className={"col-sm"}>
                <h2>DEPARTING</h2>
                <br />
                <h4>{item.estDepartureAirport}</h4>
              </div>
            </div>
          </div>
        );
      }
    })
  ) : (
    <h1 className={"text-light text-center mt-5 text-dark"} type="">
      LOADING....
    </h1>
  );
};

export default Flights;
