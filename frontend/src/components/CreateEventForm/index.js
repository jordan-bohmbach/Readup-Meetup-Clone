import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOneEvent } from "../../store/events"
import './EventForm.css'

const CreateEventForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const categoryList = useSelector(state => Object.values(state.groups))
    const hostId = useSelector(state => state.session.user.id)
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [capacity, setCapacity] = useState(0)
    const [image, setImage] = useState('')
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
        <div className='event-form-container'>
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
                <div className='event-form-buttons-section'>
                    <button
                        type="submit"
                    >
                        Create Event
                    </button>
                    <Link to='/events' className='cancel-event-button'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateEventForm