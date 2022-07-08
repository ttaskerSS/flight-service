import { useRef } from "react";
import axios from 'axios';
import '../App.css'; 

export const AddFlightForm = () => {
    const flightNumRef = useRef();
    const depDateRef = useRef();
    const arrDateRef = useRef();
    const depTimeRef = useRef();
    const arrTimeRef = useRef();
    const depAirRef = useRef();
    const arrAirRef = useRef();
    const numPassRef = useRef();
    const passLimRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        if (parseInt(document.getElementById('PassNum').value) > parseInt(document.getElementById('PassLim').value)) {
            alert("Passenger number must not exceed passenger limit");
            return;
        }
        try {
            await axios.post('http://localhost:8085/flights', 
                            { flightNumber: flightNumRef.current.value, departureDate: depDateRef.current.value, 
                              arrivalDate: arrDateRef.current.value, departureTime: depTimeRef.current.value,
                              arrivalTime: arrTimeRef.current.value, departureAirport: depAirRef.current.value, 
                              arrivalAirport: arrAirRef.current.value, numPassengers: numPassRef.current.value,
                              passengerLimit: passLimRef.current.value });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3 className='text-muted mb-4 mt-3'>Add Flight</h3>
            <form className='mt-3' onSubmit={handleSubmit} >
                <div className="form-row">
                    <div className="col">
                        <label for="inputFlightNum">Flight #</label>
                        <input type="text" className="form-control w-50" placeholder="Flight number" ref={flightNumRef} />
                    </div>
                    <div className="col">
                        <label for="inputDepDate">Departure Date</label>
                        <input type="date" className="form-control w-75" placeholder="Departure date" ref={depDateRef} />
                    </div>
                    <div className="col">
                        <label for="inputArrDate">Arrival Date</label>
                        <input type="date" className="form-control w-75" placeholder="Arrival date" ref={arrDateRef} />
                    </div>     
                </div>
                <div className="form-row mt-3">
                    <div className="col">
                        <label for="inputPassNum">Passenger #</label>
                        <input type="text" id="PassNum" className="form-control w-50" placeholder="Passenger amount" ref={numPassRef} />
                    </div>
                    <div className="col">
                        <label for="inputDepTime">Departure Time</label>
                        <input type="text" className="form-control w-75" placeholder="Departure time" ref={depTimeRef} />
                    </div>
                    <div className="col">
                        <label for="inputArrTime">Arrival Time</label>
                        <input type="text" className="form-control w-75" placeholder="Arrival time" ref={arrTimeRef} />
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col">
                        <label for="inputPassLimit">Passenger Limit #</label>
                        <input type="text" id="PassLim" className="form-control w-50" placeholder="Passenger limit" ref={passLimRef} />
                    </div> 
                    <div className="col">
                        <label for="inputDepAirport">Departure Airport</label>
                        <input type="text" className="form-control w-75" placeholder="Departure airport code" ref={depAirRef} />
                    </div> 
                    <div className="col">
                        <label for="inputArrAirport">Arrival Airport</label>
                        <input type="text" className="form-control w-75" placeholder="Arrival airport code" ref={arrAirRef} />
                    </div> 
                </div>
                <button type="submit" className="btn btn-primary mt-4">Save</button>
            </form>
        </>
    );
}
