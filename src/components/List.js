import React from 'react';

import Ticket from './Ticket';

const List = (props) => {
    let filter =  props.filter.length ? props.filter : ['0', '1', '2', '3'] 
    return (
        <div>
            {
                props.tickets.map((ticket, i) => (
                    filter.indexOf(`${ticket.stops}`) !== -1 ?
                        <Ticket ticket={ticket} key={i} course={props.course}/>
                        :
                        ''
                ))
            }
        </div>
    )
}

export default List