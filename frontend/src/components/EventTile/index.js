import './EventTile.css'

const EventTile = ({event}) => {
    const eventDay = event.date.slice(0, 9)
    const eventTime = event.date.slice(10, event.date.length)

    return (
        <div className='event-tile'>
            <img src={event.image} alt='event tile not found'></img>
            <div className='event-details-section'>
                <span>{eventDay}</span>
                <span>{eventTime}</span>
                <span>{event.name}</span>
                <span>{event.capacity}</span>
            </div>
        </div>
    )
}

export default EventTile;