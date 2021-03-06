import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateEvent } from "../../store/events"

const EditEventForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let {eventId} = useParams()
    // console.log('eventId = ', eventId)
    // console.log('type of eventId = ', typeof eventId)
    eventId=parseInt(eventId)
    const eventList = useSelector(state => Object.values(state.events))
    const myEvent = eventList.find(event => event.id === eventId)
    // console.log('myEvent = ', myEvent)
    const hostId = useSelector(state => state.session.user.id)
    
    // const venueList = Array.from(new Set(eventList.map(event => event.Venue)))
    const categoryList = useSelector(state=>Object.values(state.groups))

    const [name, setName] = useState(myEvent?.name)
    const [date, setDate] = useState(myEvent?.date)
    const [capacity, setCapacity] = useState(myEvent?.capacity)
    const [image, setImage] = useState(myEvent?.image)
    // const [venue, setVenue] = useState(myEvent?.venue)
    const [categoryId, setCategoryId] = useState(1)

    useEffect(()=> {
        setName(myEvent?.name)
        setDate(myEvent?.date)
        setCapacity(myEvent?.capacity)
        setImage(myEvent?.image)
        // setVenue(myEvent?.venue)
        setCategoryId(myEvent?.category)
    }, [myEvent])

    const reset = () => {
        setName('')
        setDate(new Date())
        setCapacity(0)
        setImage('')
        // setVenue(venueList[0])
        setCategoryId(categoryList[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let catId = categoryList.find(category => category?.type === categoryId)

        const payload = {
            id: eventId,
            hostId,
            venueId: 1,
            categoryId: (catId?.id ? catId?.id : 1),
            name,
            date,
            capacity,
            image,
        }

        let updatedEvent = await dispatch(updateEvent(payload))
        if(updatedEvent) {
            // console.log('here')
            history.push('/events/')
            reset()
        }
    }

    return(
        <div className='event-form-container'>
            <form
                className='event-form'
                onSubmit={handleSubmit}
            >
                <h2>Edit your Event</h2>
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
                {/* <select
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
                </select> */}
                <select
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                >
                    {categoryList?.map((category,i) => (
                        <option
                            key={categoryId}
                        >
                            {category?.type}
                        </option>
                    ))}
                </select>
                <div className='event-form-buttons-section'>
                    <button
                        type="submit"
                    >
                        Save Changes
                    </button>
                    <Link to='/events' className='cancel-event-button'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default EditEventForm