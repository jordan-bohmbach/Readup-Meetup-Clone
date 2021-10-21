import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateGroup } from "../../store/group"

const EditGroupForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let { groupId } = useParams()
    // console.log('groupId = ', groupId)
    // console.log('type of groupId = ', typeof groupId)
    groupId = parseInt(groupId)
    const groupList = useSelector(state => Object.values(state.groups))
    const myGroup = groupList.find(group => group.id === groupId)
    // console.log('myGroup = ', myGroup)
    const ownerId = useSelector(state => state.session.user.id)

    const [type, setType] = useState(myGroup?.name)
    const [image, setImage] = useState(myGroup?.image)

    useEffect(() => {
        setType(myGroup?.type)
        setImage(myGroup?.image)

    }, [myGroup])

    const reset = () => {
        setType('')
        setImage('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: groupId,
            ownerId,
            type,
            image,
        }

        let updatedGroup = await dispatch(updateGroup(payload))
        if (updatedGroup) {
            // console.log('here')
            history.push('/groups/')
            reset()
        }
    }

    return (
        <div className='group-form-container'>
            <form
                className='group-form'
                onSubmit={handleSubmit}
            >
                <h2>Edit your Group</h2>
                <label>
                    Type
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={e => setType(e.target.value)}
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

                <div className='group-form-button-container'>
                    <button
                        type="submit"
                    >
                        Save Changes
                    </button>
                    <Link to='/groups/' className='cancel-group-button'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default EditGroupForm