import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOneEvent } from "../../store/events"

const CreateEventForm = ({setCreateEvent}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const eventList = useSelector(state => Object.values(state.events))
    const hostId = useSelector(state => state.session.user.id)
    
    const venueList = Array.from(new Set(eventList.map(event => event.Venue)))
    const categoryList = Array.from(new Set(eventList.map(event => event.Group)))

    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [capacity, setCapacity] = useState(0)
    const [image, setImage] = useState('')
    const [venue, setVenue] = useState(venueList[0])
    const [category, setCategory] = useState(categoryList[0])

    const reset = () => {
        setName('')
        setDate(new Date())
        setCapacity(0)
        setImage('')
        setVenue(venueList[0])
        setCategory(categoryList[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("venue = ", venue)
        const payload = {
            hostId,
            venue: venue.id,
            category: category.id,
            name,
            date,
            capacity,
            image,
        }

        let createdEvent = await dispatch(createOneEvent(payload))
        if(createdEvent) {
            console.log('here')
            history.push('/events/')
            reset()
        }

    }

    return(
        <>
            <form
                className='event-form'
                onSubmit={handleSubmit}
            >
                <h2>Create a new Event</h2>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Date
                    <input
                        type='date'
                        name='date'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </label>
                <label>
                    Capacity
                    <input
                        type="number"
                        name="capacity"
                        value={capacity}
                        onChange={e => setCapacity(e.target.value)}
                    />
                </label>
                <label>
                    Hosted Image Link
                    <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </label>
                <select
                    value={venue?.id}
                    onChange={e => setVenue(e.target.value)}
                >
                    {venueList?.map((venue, i) => (
                        <option
                            key={`${venue?.id}-${venue?.name}-${i}`}
                        >
                            {venue?.name}
                        </option>
                    ))}
                </select>
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    {categoryList?.map((category,i) => (
                        <option
                            key={`${category?.id}-${i}`}
                        >
                            {category?.type}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                >
                    Create Event
                </button>
            </form>
            <Link to='/events/' className='cancel-event-button'>Cancel</Link>
        </>
    )
}

export default CreateEventForm