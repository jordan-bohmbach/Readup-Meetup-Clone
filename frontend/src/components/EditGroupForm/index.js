import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateGroup } from "../../store/group"

const EditGroupForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let { groupId } = useParams()
    console.log('groupId = ', groupId)
    console.log('type of groupId = ', typeof groupId)
    groupId = parseInt(groupId)
    const groupList = useSelector(state => Object.values(state.groups))
    const myGroup = groupList.find(group => group.id === groupId)
    console.log('myGroup = ', myGroup)
    const hostId = useSelector(state => state.session.user.id)

    const venueList = Array.from(new Set(groupList.map(group => group.Venue)))
    const categoryList = Array.from(new Set(groupList.map(group => group.Group)))

    const [name, setName] = useState(myGroup?.name)
    const [date, setDate] = useState(myGroup?.date)
    const [capacity, setCapacity] = useState(myGroup?.capacity)
    const [image, setImage] = useState(myGroup?.image)
    const [venue, setVenue] = useState(myGroup?.venue)
    const [category, setCategory] = useState(myGroup?.category)

    useEffect(() => {
        setName(myGroup?.name)
        setDate(myGroup?.date)
        setCapacity(myGroup?.capacity)
        setImage(myGroup?.image)
        setVenue(myGroup?.venue)
        setCategory(myGroup?.category)
    }, [myGroup])

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
            id: groupId,
            hostId,
            venue: venue?.id,
            category: category?.id,
            name,
            date,
            capacity,
            image,
        }

        let updatedGroup = await dispatch(updateGroup(payload))
        if (updatedGroup) {
            console.log('here')
            history.push('/groups/')
            reset()
        }
    }

    return (
        <>
            <form
                className='group-form'
                onSubmit={handleSubmit}
            >
                <h2>Edit your Group</h2>
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
                    {categoryList?.map((category, i) => (
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
                    Save Changes
                </button>
            </form>
            <Link to='/groups/' className='cancel-group-button'>Cancel</Link>
        </>
    )
}

export default EditGroupForm