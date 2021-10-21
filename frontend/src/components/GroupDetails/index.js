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
                <h1>{currentGroup?.type} Group</h1>
                <img src={`${currentGroup?.image}`} alt={currentGroup?.name}></img>

            </div>

            <div className='group-events'>
                {eventList.filter(event=>event.categoryId===groupId).length ? <h1>{currentGroup?.type} Events</h1> : <h3 style={{textAlign:'center'}}>No Events in {currentGroup?.type} at this time</h3>}
                {eventList.map(currentEvent => (
                    currentEvent.categoryId === groupId ? <EventTile event={currentEvent}></EventTile> : ''
                ))}
            </div>
        </>
    )
}

export default GroupDetails