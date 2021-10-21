import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import './EventDetails.css'

const EventDetails = () => {

    let {eventId} = useParams()
    eventId = parseInt(eventId)
    const currentEvent = useSelector(state=> state.events[eventId])


    return (
        <>
            <div className="event-details">
                <Link to='/events/' className='back-to-events'>Back to Events Page</Link>
                <p className="event-info">{currentEvent?.name}</p>
                <img src={`${currentEvent?.image}`} alt={currentEvent?.name}></img>       
                <p>Venue: {currentEvent?.Venue.name}</p >
                <p>Date: {currentEvent?.date.slice(0,10)}</p >
                <p>Capacity: {currentEvent?.capacity}</p>

            </div>
        </>
    )
}

export default EventDetails