import { Link } from "react-router-dom"
import EventTile from "../EventTile"
import './EventListPage.css'

const EventListPage = ({eventList}) => {
    return(
        <div className='event-page'>
            <h1>Events</h1>
            <div className='event-list'>
                {eventList.map(event =>
                    <EventTile
                        key={event.id}
                        event={event}
                    />
                )}
            </div>
            <Link to='events/new' className='create-event-link'>
                <span className='create-event-button'>Create a new Event</span>
            </Link>
        </div>
    )
}

export default EventListPage