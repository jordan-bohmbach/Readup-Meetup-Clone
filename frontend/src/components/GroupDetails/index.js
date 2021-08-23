import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import EventTile from "../EventTile"
import './GroupDetails.css'

const GroupDetails = () => {

    let { groupId } = useParams()
    groupId = parseInt(groupId)
    // console.log(typeof groupId)
    const currentGroup = useSelector(state => state.groups[groupId])
    // console.log(currentGroup)
    const eventObject = useSelector(state => state.events)
    const eventList = Object.values(eventObject)
    
    console.log(eventList)

    return (
        <>
            <div className="group-details">
                <Link to='/groups/' className='back-to-groups'>Back to groups Page</Link>
                <p className="group-info">{currentGroup?.name}</p>
                <img src={`${currentGroup?.image}`} alt={currentGroup?.name}></img>
                <p>Type: {currentGroup?.type}</p>

            </div>

            <div className='group-events'>
                {eventList.map(currentEvent => (
                    currentEvent.categoryId === groupId ? <EventTile event={currentEvent}></EventTile> : ''
                ))}
            </div>
        </>
    )
}

export default GroupDetails