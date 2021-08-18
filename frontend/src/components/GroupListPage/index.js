import GroupTile from "../GroupTile"

const GroupListPage = ({groupList}) => {
    return (
        <div className='group-page'>
        <h1>Groups</h1>
        {groupList.map(group =>
                <GroupTile
                    key={group.id}
                    group={group}
                />
            )}
        </div>
    )
}

export default GroupListPage