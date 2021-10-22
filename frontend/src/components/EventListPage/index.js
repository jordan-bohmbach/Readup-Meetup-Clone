import { Link, } from "react-router-dom"
import EventTile from "../EventTile"
import './EventListPage.css'
import {React} from "react"
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from "../../store/session";

const EventListPage = ({eventList}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    const handleDemo = () => {
        return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
    }

    return(
        <div className='event-page'>
            <h1>Events</h1>
            {(currentUser && currentUser.id) ? 
            <Link to={'/events/new'} className='create-event-button'>Create New Event</Link> : 
            <div className='login-prompt-container'>
                <h3>
                    Log in or
                </h3>
                <button onClick={handleDemo}>
                    Demo
                </button>
                <h3>
                    to create an Event
                </h3>
            </div>
            }
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