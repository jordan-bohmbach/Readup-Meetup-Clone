import { Link, Route } from "react-router-dom"
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

    // useEffect(()=>{
    //     if(window.location.href.split('/').length === 5 && ){
    //         console.log(parseInt(window.location.href.split('/')[4]))
    //         const myEventId = parseInt(window.location.href.split('/')[4])
    //         const myEvent = eventList.find(event => event.id === myEventId)
    //         console.log(myEvent)
    //         setSelectedEvent(myEvent)
    //     } else {
    //         setSelectedEvent(eventList[0])
    //     }
    // },[eventList])

    return(
        <div className='event-page'>
            <h1>Events</h1>
            <div className='event-page-upper-section'>
                <div className='event-list'>
                    {eventList.map(event =>

                        <Link to={`/events/${event.id}`} key={event.id} className={event.id === selectedEvent.id ? 'selected-event-tile' : ''}>
                                <EventTile
                                    setSelectedEvent={setSelectedEvent}
                                    selectedEvent={selectedEvent}
                                    key={event.id}
                                    event={event}
                                />
                            </Link>

                    )}
                </div>
                <div className="event-side-panel">
                    <div className="event-side-panel-toggle-wrapper">
                        <div className="event-side-panel-toggle"
                            onClick={() => setSideOpen(!sideOpen)}>
                            {sideOpen ? '>' : '<'}
                        </div>
                    </div>
                    <Route path='/events/:eventId'>
                        <EventDetails visible={sideOpen} event={selectedEvent} />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default EventListPage