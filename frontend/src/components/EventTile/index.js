import './EventTile.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteEvent } from '../../store/events'

const EventTile = ({event, setSelectedEvent, selectedEvent}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)


    const eventDay = event.date.slice(0, 9)
    const eventTime = event.date.slice(10, event.date.length)

    const handleEvent = () => {
        setSelectedEvent(event)
    }

    const handleDeleteClick = async() => {
        console.log('dispatching deleteEvent here with event.id=', event.id)
        await dispatch(deleteEvent(event.id))
    }

    return (
        <div className='event-tile' onClick={handleEvent}>
            <img src={event.image} alt='event tile not found'></img>
            <div className='event-details-section'>
                <span>{eventDay}</span>
                <span>{eventTime}</span>
                <span>{event.name}</span>
                <span>{event.capacity}</span>
            </div>
            {(currentUser && currentUser.id === event.hostId ? <button onClick={handleDeleteClick}>Delete Event</button> : '')}
        </div>
    )
}

export default EventTile;