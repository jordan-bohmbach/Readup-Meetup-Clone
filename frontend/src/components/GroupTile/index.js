import './GroupTile.css'

const GroupTile = ({group}) => {
    return (
        <div className='group-tile'>
            <img src={group.image} alt='event tile not found'></img>
            <span>{group.type}</span>
        </div>
    )
}

export default GroupTile;