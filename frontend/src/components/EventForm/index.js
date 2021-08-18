import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getEvents } from "../../store/events"

const EventForm = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [capacity, setCapacity] = useState(0)
    const [image, setImage] = useState('')
    const [venue, setVenue] = useState(1)
    const [category, setCategory] = useState(1)

    const eventList = useSelector(state => Object.values(state.events))

    const venueList = Array.from(new Set(eventList.map(event => event.Venue.name)))
    const categoryList = Array.from(new Set(eventList.map(event => event.Group.type)))

    const cancelCreation = () => {

    }

    const reset = () => {
        setName('')
        setDate(new Date())
        setCategory(0)
        setImage('')
        setVenue(venueList[0])
        setCategory(categoryList[0])
    }

    const handleSubmit = async () => {
        const payload = {
            name,
            date,
            capacity,
            image,
            venue,
            category,
        }

        console.log('payload submitted = ', payload)
        const res = await fetch(`/api/events`,{
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })
        reset()
        getEvents()
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
                    value={venue}
                    onChange={e => setVenue(e.target.value)}
                >
                    {venueList.map(venue => (
                        <option
                            key={venue}
                        >
                            {venue}
                        </option>
                    ))}
                </select>
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    {categoryList.map(category => (
                        <option
                            key={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                >
                    Create Event
                </button>
            </form>
            <Link to='/events/' className='cancel-event-button' onClick={cancelCreation}>Cancel</Link>
        </>
    )
}

export default EventForm