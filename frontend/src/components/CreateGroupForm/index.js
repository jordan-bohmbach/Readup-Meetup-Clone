import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createOneGroup } from "../../store/group"

const CreateGroupForm = () => {
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
        e.prgroupDefault()
        const payload = {
            type,
            image,
        }

        let createdGroup = await dispatch(createOneGroup(payload))
        if (createdGroup) {
            history.push(`/groups/${createdGroup.id}`)
            reset()
        }

        // console.log('payload submitted = ', payload)
        // const res = await fetch(`/api/groups`,{
        //     method: 'post',
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     },
        //     body: JSON.stringify(payload)
        // })
        // reset()
        // getgroups()
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