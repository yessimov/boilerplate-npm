import React from 'react'

const Ticket = ({ ticket, course }) => {
    return (<div>
        <div className="ticket row p-3 mb-3">
            <div className="col-3">
                <button className="btn btn-warning pl-4 pr-4">Купить<br></br> за {(ticket.price * course).toFixed(0)}</button>
            </div>
            <div className="col-9 d-flex">
                <div>
                    <h3>{ticket.departure_time}</h3>
                    <p>{ticket.origin}, {ticket.origin_name}</p>
                    <span>{ticket.departure_date}</span>
                </div>
                <div className="mr-auto ml-auto">
                    {!ticket.stops ? "" : ticket.stops === 1 ? <p>{ticket.stops} пересадка</p> : <p>{ticket.stops} пересадки</p>}
                </div>
                <div className="ml-auto">
                    <h3>{ticket.arrival_time}</h3>
                    <p>{ticket.destination_name}, {ticket.destination}</p>
                    <span>{ticket.arrival_date}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Ticket