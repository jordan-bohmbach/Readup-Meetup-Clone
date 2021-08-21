import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createOneGroup } from "../../store/group"
import { useSelector } from "react-redux"

const CreateGroupForm = () => {
    const ownerId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()
    const history = useHistory()
    const [type, setType] = useState('')
    const [image, setImage] = useState('')

    const cancelCreation = () => {

    }

    const reset = () => {
        setType('')
        setImage('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            ownerId,
            type,
            image,
        }

        console.log('about to dispat')
        let createdGroup = await dispatch(createOneGroup(payload))
        console.log('dispatched')
        
        if (createdGroup) {
            console.log('created')
            history.push(`/groups/`)
            reset()
        }

    }

    return (
        <>
            <form
                className='group-form'
                onSubmit={handleSubmit}
            >
                <h2>Create a new group</h2>
                <label>
                    Type
                    <input
                        type="text"
                        name="name"
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
                <button
                    type="submit"
                >
                    Create Group
                </button>
            </form>
            <Link to='/groups/' className='cancel-group-button' onClick={cancelCreation}>Cancel</Link>
        </>
    )
}

export default CreateGroupForm