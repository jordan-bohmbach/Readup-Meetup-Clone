import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import './GroupDetails.css'

const GroupDetails = () => {

    let { groupId } = useParams()
    groupId = parseInt(groupId)
    console.log(typeof groupId)
    const currentGroup = useSelector(state => state.groups[groupId])
    console.log(currentGroup)


    return (
        <>
            <div className="group-details">
                <Link to='/groups/' className='back-to-groups'>Back to groups Page</Link>
                <p className="group-info">{currentGroup?.name}</p>
                <img src={`${currentGroup?.image}`} alt={currentGroup?.name}></img>
                <p>Type: {currentGroup?.type}</p>


            </div>
        </>
    )
}

export default GroupDetails