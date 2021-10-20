import { Link, } from "react-router-dom"
import EventTile from "../EventTile"
import './EventListPage.css'
import {React} from "react"
import { useSelector } from "react-redux"

const EventListPage = ({eventList}) => {
    const currentUser = useSelector(state => state.session.user)

    return(
        <div className='event-page'>
            <h1>Events</h1>
            {(currentUser && currentUser.id) ? <Link to={'/events/new'} className='create-event-button'>Create New Event</Link> : ''}
            <div className='event-page-upper-section'>
                <div className='event-list'>
                    {eventList.map(event =>
                                <EventTile
                                    key={event.id}
                                    event={event}
                                />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventListPage