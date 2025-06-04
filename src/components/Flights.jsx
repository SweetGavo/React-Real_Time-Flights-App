import React, { useState, useEffect } from "react";
import "../index.css";
import Table from "react-bootstrap/Table";
import { aviationService } from "../services/aviationService";
import Spinner from "react-bootstrap/Spinner";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      setLoading(true);
      const data = await aviationService.getRealTimeFlights();
      console.log(data);
      
      setFlights(data.data || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setError('Failed to load flights. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-light">
        <h3>{error}</h3>
        <button className="btn btn-primary mt-3" onClick={fetchFlights}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Airline</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>
                {flight.flight && flight.flight.iata}
              </td>
              <td>
                {flight.airline && flight.airline.name}
              </td>
              <td>
                {flight.departure && (
                  <>
                    <div>{flight.departure.airport}</div>
                    <div className="flight-time">
                      {new Date(flight.departure.scheduled).toLocaleTimeString()}
                    </div>
                    {flight.departure.delay && (
                      <div className="text-danger">
                        Delay: {flight.departure.delay} min
                      </div>
                    )}
                  </>
                )}
              </td>
              <td>
                {flight.arrival && (
                  <>
                    <div>{flight.arrival.airport}</div>
                    <div className="flight-time">
                      {new Date(flight.arrival.scheduled).toLocaleTimeString()}
                    </div>
                    {flight.arrival.delay && (
                      <div className="text-danger">
                        Delay: {flight.arrival.delay} min
                      </div>
                    )}
                  </>
                )}
              </td>
              <td>
                <span className={`badge bg-${getStatusBadgeColor(flight.flight_status)}`}>
                  {flight.flight_status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// Helper function to determine badge color based on flight status
const getStatusBadgeColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'active':
      return 'success';
    case 'scheduled':
      return 'primary';
    case 'landed':
      return 'info';
    case 'cancelled':
      return 'danger';
    case 'incident':
      return 'warning';
    case 'diverted':
      return 'warning';
    default:
      return 'secondary';
  }
};

export default Flights; 