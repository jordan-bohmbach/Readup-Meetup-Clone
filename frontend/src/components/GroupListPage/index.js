import { Link } from "react-router-dom"
import GroupTile from "../GroupTile"
import './GroupListPage.css'
import { React, useState } from "react"

const GroupListPage = ({ groupList }) => {

    const [selectedGroup, setSelectedGroup] = useState('')


    return (
        <div className='group-page'>
            <h1>Groups</h1>
            <div className='group-page-upper-section'>
                <div className='group-list'>
                    {groupList.map(group =>

                            <GroupTile

                                setSelectedgroup={setSelectedGroup}
                                key={group.id}
                                group={group}
                            />

                    )}
                </div>

            </div>
            <Link to={'/groups/new'}>Create New Group</Link>
        </div>
    )
}

export default GroupListPage