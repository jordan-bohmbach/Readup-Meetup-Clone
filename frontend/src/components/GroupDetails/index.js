import { useState } from "react"
import { Link } from "react-router-dom"
import CreateGroupForm from "../CreateGroupForm"

const GroupDetails = ({ group, visible }) => {
    const [createGroup, setCreateGroup] = useState(false)

    const handleClick = () => {
        setCreateGroup(true)
    }

    if (!visible) return null

    if (createGroup) return (
        <CreateGroupForm />
    )

    if (!group) return (
        <div className="group-details">
            <p className="group-info">Groups</p>
            <p>Welcome to our group catalog. Please enjoy exploring.</p>
            <p>Please select an group to view its details.</p>
            <p>Or create a new group below</p>
            <Link to='/groups/new' className='create-group-link' onClick={handleClick}>
                <span className='create-group-button'>Create a new Group</span>
            </Link>
        </div>
    )

    return (
        <div className="group-details">
            <p className="group-info">{group.name}</p>
            <p>{group.description}</p>
            {/* <p className="group-price">{group.price}</p> */}
            <p>Details</p>
            {/* <ul>
                {group.details.map((item, index) => <li className="product-details-list-item" key={index}>
                    {item.label}<br />
                    <span className="product-info">{item.value}</span>
                </li>)}
            </ul> */}
        </div>
    )
}

export default GroupDetails