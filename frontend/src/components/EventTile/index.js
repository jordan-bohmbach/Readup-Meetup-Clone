import './EventTile.css'

const EventTile = ({event}) => {
    console.log('the image in the event tile is :', )
    return (
        <div className='eventTile'>
            <img src={event.image} alt='event tile not found'></img>
            <h2>{event.date}</h2>
            <h2>{event.name}</h2>
            <h2>{event.capacity}</h2>
        </div>
    )
}

export default EventTile;