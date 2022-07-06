import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

export const DeleteFlightForm = () => {
    const flightNumRef = useRef();
    const depDateRef = useRef();
    const arrDateRef = useRef();
    const depTimeRef = useRef();
    const arrTimeRef = useRef();
    const depAirRef = useRef();
    const arrAirRef = useRef();
    const numPassRef = useRef();
    const passLimRef = useRef();
    const query = useRef();
    const navigate = useNavigate();

    const autoFill = async () => {
        const flightNumQuery = query.current.value;
        const flight = await axios.get('http://localhost:8085/flights/' + flightNumQuery);

        document.getElementById('flightNum').value = flight.data[0].flightNumber;
        document.getElementById('DepDate').value = flight.data[0].departureDate;
        document.getElementById('ArrDate').value = flight.data[0].arrivalDate;
        document.getElementById('DepTime').value = flight.data[0].departureTime;
        document.getElementById('ArrTime').value = flight.data[0].arrivalTime;
        document.getElementById('DepAir').value = flight.data[0].departureAirport;
        document.getElementById('ArrAir').value = flight.data[0].arrivalAirport;
        document.getElementById('PassNum').value = flight.data[0].numPassengers;
        document.getElementById('PassLim').value = flight.data[0].passengerLimit; 
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            const flightNumQuery = query.current.value;

            await axios.delete('http://localhost:8085/flights/' + flightNumQuery, 
                            { flightNumber: flightNumRef.current.value, departureDate: depDateRef.current.value, 
                              arrivalDate: arrDateRef.current.value, departureTime: depTimeRef.current.value,
                              arrivalTime: arrTimeRef.current.value, departureAirport: depAirRef.current.value, 
                              arrivalAirport: arrAirRef.current.value, numPassengers: numPassRef.current.value,
                              passengerLimit: passLimRef.current.value }); 
            navigate('../', {replace: true});
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div class="row">
                <div class="col-8">
                   <h3 className='text-muted mb-2 mt-3'>Delete Flight</h3>
                </div>
                <div class="col-3">
                    <div class="input-group mt-3 ml-1">
                        <input type="search" class="form-control" placeholder="Flight #" 
                         aria-label="Flight number" aria-describedby="basic-addon2" ref={query} />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="search" onClick={autoFill}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <form className='mt-3' onSubmit={handleSubmit}>
                <fieldset disabled>
                    <div className="form-row">
                        <div className="col">
                            <label for="inputFlightNum">Flight #</label>
                            <input type="text" id="flightNum" className="form-control w-50" placeholder="Flight number" ref={flightNumRef} />
                        </div>
                        <div className="col">
                            <label for="inputDepDate">Departure Date</label>
                            <input type="text" id="DepDate" className="form-control w-75" placeholder="Departure date" ref={depDateRef} />
                        </div>
                        <div className="col">
                            <label for="inputArrDate">Arrival Date</label>
                            <input type="text" id="ArrDate" className="form-control w-75" placeholder="Arrival date" ref={arrDateRef} />
                        </div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="col">
                            <label for="inputPassNum">Passenger #</label>
                            <input type="text" id="PassNum" className="form-control w-50" placeholder="Passenger amount" ref={numPassRef} />
                        </div>
                        <div className="col">
                            <label for="inputDepTime">Departure Time</label>
                            <input type="text" id="DepTime" className="form-control w-75" placeholder="Departure time" ref={depTimeRef} />
                        </div>
                        <div className="col">
                            <label for="inputArrTime">Arrival Time</label>
                            <input type="text" id="ArrTime" className="form-control w-75" placeholder="Arrival time" ref={arrTimeRef} />
                        </div>
                    </div>
                    <div className="form-row mt-3">
                        <div className="col">
                            <label for="inputPassLimit">Passenger Limit #</label>
                            <input type="text" id="PassLim" className="form-control w-50" placeholder="Passenger limit" ref={passLimRef} />
                        </div> 
                        <div className="col">
                            <label for="inputDepAirport">Departure Airport</label>
                            <input type="text" id="DepAir" className="form-control w-75" placeholder="Departure airport" ref={depAirRef} />
                        </div> 
                        <div className="col">
                            <label for="inputArrAirport">Arrival Airport</label>
                            <input type="text" id="ArrAir" className="form-control w-75" placeholder="Arrival airport" ref={arrAirRef} />
                        </div> 
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-danger mt-4">Delete</button>
            </form>
        </>
    ); 
}
