import './EventTile.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteEvent } from '../../store/events'
import { Link } from 'react-router-dom'

const EventTile = ({event, selectedEvent}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)


    const eventDay = event.date.slice(0, 9)
    const eventTime = event.date.slice(10, event.date.length)


    const handleDeleteClick = async() => {
        console.log('dispatching deleteEvent here with event.id=', event.id)
        await dispatch(deleteEvent(event.id))
    }


    return (
        <div className='event-tile'>
            <Link to={`/events/${event?.id}`} key={event?.id} className='event-details-link'>
                <img src={event.image} alt='event tile not found'></img>
                <div className='event-details-section'>
                    <span>Date: {eventDay}</span>
                    <span>Name: {event.name}</span>
                    <span>Capacity: {event.capacity}</span>
                </div>
            </Link>
            {(currentUser && currentUser.id === event.hostId ? <span><Link to={`/events/${event.id}/edit`} className='edit-event-link'>Edit Event</Link></span>: '')}
            {(currentUser && currentUser.id === event.hostId ? <button onClick={handleDeleteClick} className='delete-event-link'>Delete Event</button> : '')}
        </div>
    )
}

export default EventTile;