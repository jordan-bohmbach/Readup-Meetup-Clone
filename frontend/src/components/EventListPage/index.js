import { Link, } from "react-router-dom"
import EventTile from "../EventTile"
import './EventListPage.css'
import {React, useState} from "react"
import { useSelector } from "react-redux"

const EventListPage = ({eventList}) => {
    const currentUser = useSelector(state => state.session.user)
    const [selectedEvent, setSelectedEvent] = useState('')

    return(
        <div className='event-page'>
            <h1>Events</h1>
            <div className='event-page-upper-section'>
                <div className='event-list'>
                    {eventList.map(event =>


                                <EventTile
                                    selectedEvent={selectedEvent}
                                    key={event.id}
                                    event={event}
                                />


                    )}
                </div>
            </div>
            {(currentUser && currentUser.id) ? <Link to={'/events/new'} className='create-event-button'>Create New Event</Link> : ''}
        </div>
    )
}

export default EventListPage