import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOneEvent } from "../../store/events"

const CreateEventForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const categoryList = useSelector(state => Object.values(state.groups))
    // const eventList = useSelector(state => Object.values(state.events))
    const hostId = useSelector(state => state.session.user.id)
    
    // const venueNameList = []
    // const venueIdList = []

    // const venueNameSet = new Set()
    // const venueIdSet = new Set()
    // eventList.forEach(event => {
    //     if(!venueNameSet.has(event?.Venue?.name)){
    //         venueNameList.push(event?.Venue)
    //         venueIdList.push(event?.id)
    //         venueNameSet.add(event?.Venue?.name)
    //     }
    // })

    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [capacity, setCapacity] = useState(0)
    const [image, setImage] = useState('')
    // const [venueId, setVenueId] = useState(venueIdList[0])
    const [categoryId, setCategoryId] = useState(1)

    const reset = () => {
        setName('')
        setDate(new Date())
        setCapacity(0)
        setImage('')
        // setVenueId(venueIdList[0])
        setCategoryId(categoryList[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let catId = categoryList.find(category => category.type === categoryId)


        const payload = {
            hostId,
            venueId : 1,
            categoryId: (catId?.id ? catId?.id : 1),
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
                {/* <select
                    value={venueId}
                    onChange={e => setVenueId(e.target.value)}
                >
                    {venueNameList?.map((venueName, i) => (
                        <option
                            key={i}
                        >
                            {venueName}
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