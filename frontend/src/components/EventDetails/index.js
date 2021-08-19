import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import CreateEventForm from "../CreateEventForm"

const EventDetails = ({visible}) => {
    const [createEvent, setCreateEvent] = useState(false)
    const {eventId} = useParams()
    const currentEvent = useSelector(state=> state.events[eventId])

    const handleClick = () => {
        setCreateEvent(true)
    }

    if (!visible) return null

    if(createEvent) return(
        <CreateEventForm setCreateEvent={setCreateEvent}/>
    )

    if (!currentEvent) return (
        <div className="event-details">
            <p className="event-info">Events</p>
            <p>Welcome to our event catalog. Please enjoy exploring.</p>
            <p>Please select an event to view its details.</p>
            <p>Or create a new event below</p>
            <Link to='/events/new' className='create-event-link' onClick={handleClick}>
                <span className='create-event-button'>Create a new Event</span>
            </Link>
        </div>
    )

    return (
        <div className="event-details">
            <p className="event-info">{currentEvent.name}</p>
            <p>{currentEvent.description}</p>
            {/* <p className="event-price">{event.price}</p> */}
            <p>Details</p>
            {/* <ul>
                {event.details.map((item, index) => <li className="product-details-list-item" key={index}>
                    {item.label}<br />
                    <span className="product-info">{item.value}</span>
                </li>)}
            </ul> */}
        </div>
    )
}

export default EventDetails