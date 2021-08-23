import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOneEvent } from "../../store/events"

const CreateEventForm = ({setCreateEvent}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const eventList = useSelector(state => Object.values(state.events))
    const hostId = useSelector(state => state.session.user.id)
    
    const venueList = []
    const venueSet = new Set()
    eventList.forEach(event => {
        if(!venueSet.has(event?.Venue?.name)){
            venueList.push(event?.Venue)
            venueSet.add(event?.Venue?.name)
        }
    })
    const venueNameList = venueList.map(venue => venue.name)

    const categoryList = useSelector(state => Object.values(state.groups))

    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [capacity, setCapacity] = useState(0)
    const [image, setImage] = useState('')
    const [venueName, setVenueName] = useState(venueList[0]?.name)
    const [category, setCategory] = useState(categoryList[0])

    const reset = () => {
        setName('')
        setDate(new Date())
        setCapacity(0)
        setImage('')
        setVenueName(venueList[0].name)
        setCategory(categoryList[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let myvenue = venueList.find(venue => venue.name === venueName)
        let mycategory = categoryList.find(category => category.name === category)
        const payload = {
            hostId,
            venueId: 1,
            categoryId: 1,
            name,
            date,
            capacity,
            image,
        }

        let createdEvent = await dispatch(createOneEvent(payload))
        if(createdEvent) {
            // console.log('here')
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
                    value={venueName}
                    onChange={e => setVenueName(e.target.value)}
                >
                    {venueNameList.map(venueName => (
                        <option
                            key={venueName}
                        >
                            {venueName}
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