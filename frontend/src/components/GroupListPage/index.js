import { Link } from "react-router-dom"
import GroupTile from "../GroupTile"
import './GroupListPage.css'
import { React } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from "../../store/session";

const GroupListPage = ({ groupList }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    const handleDemo = () => {
        return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
    }

    return (
        <div className='group-page'>
            <h1>Groups</h1>
            {(currentUser && currentUser.id) ? 
            <Link to={'/groups/new'} className='create-group-button'>Create New Group</Link> : 
            <div className='login-prompt-container'>
                <h3>
                    Log in or
                </h3>
                <button onClick={handleDemo}>
                    Demo
                </button>
                <h3>
                    to create a Group
                </h3>
            </div>
            }

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