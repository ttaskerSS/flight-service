import { useEffect, useState } from 'react';
import axios from 'axios';

export const FlightList = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <>
            <h3 className='text-muted mb-4 mt-3'>Flights</h3>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Flight #</th>
                        <th scope='col'>Departure</th>
                        <th scope='col'>Arrival</th>
                        <th scope='col'>Depature Airport</th>
                        <th scope='col'>Arrival Airport</th>
                        <th scope='col'>Passengers</th>
                        <th scope='col'>Passenger Limit</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map(flight => {
                        return (
                            <tr>
                                <th scope='row'>{flight.flightNumber}</th>
                                <td>{flight.departureDate}, {flight.departureTime}</td>
                                <td>{flight.arrivalDate}, {flight.arrivalTime}</td>
                                <td>{flight.departureAirport}</td>
                                <td>{flight.arrivalAirport}</td>
                                <td>{flight.numPassengers}</td>
                                <td>{flight.passengerLimit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}