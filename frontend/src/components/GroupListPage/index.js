import { Link } from "react-router-dom"
import GroupTile from "../GroupTile"
import './GroupListPage.css'
import { React, useState, useEffect } from "react"
import GroupDetails from "../GroupDetails"
import { Route } from "react-router"

const GroupListPage = ({ groupList }) => {
    const [sideOpen, setSideOpen] = useState(true)
    const [selectedGroup, setSelectedGroup] = useState('')

    useEffect(() => {
        if (selectedGroup) setSideOpen(true)
    }, [selectedGroup])

    useEffect(() => {
        if (!sideOpen) setSelectedGroup('')
    }, [sideOpen])

    const handleGroup = (group) => {
        setSelectedGroup(group)
    }

    return (
        <div className='group-page'>
            <h1>Groups</h1>
            <div className='group-page-upper-section'>
                <div className='group-list'>
                    {groupList.map(group =>
                        <Link to={`/groups/${group.id}`}>
                            <GroupTile

                                setSelectedgroup={setSelectedGroup}
                                key={group.id}
                                group={group}
                            />
                        </Link>
                    )}
                </div>
                <div className="group-side-panel">
                    <div className="group-side-panel-toggle-wrapper">
                        <div className="group-side-panel-toggle"
                            onClick={() => setSideOpen(!sideOpen)}>
                            {sideOpen ? '>' : '<'}
                        </div>
                    </div>
                    <GroupDetails visible={sideOpen} group={selectedGroup} />
                </div>
            </div>
        </div>
    )
}

export default GroupListPage