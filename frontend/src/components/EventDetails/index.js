import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import CreateEventForm from "../CreateEventForm"

const EventDetails = ({selectedEvent}) => {
    const [createEvent, setCreateEvent] = useState(false)
    let {eventId} = useParams()
    eventId = parseInt(eventId)
    console.log(typeof eventId)
    const currentEvent = useSelector(state=> state.events[eventId])
    console.log(currentEvent)

    const handleClick = () => {
        setCreateEvent(true)
    }

    return (
        <div className="event-details">
            <p className="event-info">{currentEvent?.name}</p>
            <Link to='/events/'>Back to Events Page</Link>
            <img src={`${currentEvent?.image}`} alt={currentEvent?.name}></img>
            <p>Description: {currentEvent?.description}</p>            
            <p>HostId:{currentEvent?.hostId}</p>
            <p>VenueId:{currentEvent?.venueId}</p >
            <p>Date: {currentEvent?.date}</p >
            <p>Capacity: {currentEvent?.capacity}</p>

        </div>
    )
}

export default EventDetails