import './GroupTile.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteGroup } from '../../store/group'
import { Link } from 'react-router-dom'

const GroupTile = ({ group, selectedGroup }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    const handleDeleteClick = async () => {
        console.log('dispatching deletegroup here with group.id=', group.id)
        await dispatch(deleteGroup(group.id))
    }


    return (
        <div className='group-tile'>
            <Link to={`/groups/${group?.id}`} key={group?.id} className={group?.id === selectedGroup?.id ? 'selected-group-tile' : ''}>
                <img src={group.image} alt='group tile not found'></img>
                <div className='group-details-section'>
                    <span>{group.type}</span>
                </div>
            </Link>
            {(currentUser && currentUser.id === group.ownerId ? <Link to={`/groups/${group.id}/edit`}>Edit Group</Link> : '')}
            {(currentUser && currentUser.id === group.ownerId ? <button onClick={handleDeleteClick}>Delete Group</button> : '')}
        </div>
    )
}

export default GroupTile;