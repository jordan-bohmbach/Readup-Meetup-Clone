import { Link, } from "react-router-dom"
import EventTile from "../EventTile"
import './EventListPage.css'
import {React, useState} from "react"

const EventListPage = ({eventList}) => {

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
                        <Link to={'/events/new'}>Create New Event</Link>
        </div>
    )
}

export default EventListPage