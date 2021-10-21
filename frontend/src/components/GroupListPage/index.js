import { Link } from "react-router-dom"
import GroupTile from "../GroupTile"
import './GroupListPage.css'
import { React } from "react"
import { useSelector } from "react-redux"

const GroupListPage = ({ groupList }) => {
    const currentUser = useSelector(state => state.session.user)

    return (
        <div className='group-page'>
            <h1>Groups</h1>
            {(currentUser && currentUser.id) ? <Link to={'/groups/new'} className='create-group-button'>Create New Group</Link> : ''}
            <div className='group-page-upper-section'>
                <div className='group-list'>
                    {groupList.map(group =>
                            <GroupTile
                                key={group.id}
                                group={group}
                            />
                    )}
                </div>

            </div>
        </div>
    )
}

export default GroupListPage