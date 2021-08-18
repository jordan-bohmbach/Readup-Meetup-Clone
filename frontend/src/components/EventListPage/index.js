import { Link } from "react-router-dom"
import EventTile from "../EventTile"
import './EventListPage.css'
import {React, useState, useEffect} from "react"
import EventDetails from "../EventDetails"

const EventListPage = ({eventList}) => {
    const [sideOpen, setSideOpen] = useState(true)
    const [selectedEvent, setSelectedEvent] = useState('')

    useEffect(() => {
        if(selectedEvent) setSideOpen(true)
    }, [selectedEvent])

    useEffect(()=> {
        if(!sideOpen) setSelectedEvent('')
    }, [sideOpen])

    return(
        <div className='event-page'>
            <h1>Events</h1>
            <div className='event-page-upper-section'>
                <div className='event-list'>
                    {eventList.map(event =>
                        <EventTile
                            key={event.id}
                            event={event}
                        />
                    )}
                </div>
                <div className="event-side-panel">
                    <div className="event-side-panel-toggle-wrapper">
                        <div className="event-side-panel-toggle"
                            onClick={() => setSideOpen(!sideOpen)}>
                            {sideOpen ? '>' : '<'}
                        </div>
                    </div>
                    <EventDetails visible={sideOpen} event={selectedEvent} />
                </div>
            </div>
        </div>
    )
}

export default EventListPage