import './GroupTile.css'

const GroupTile = ({group}) => {
    return (
        <div className='groupTile'>
            <img src={group.image} alt='event tile not found'></img>
            <h2>{group.type}</h2>
        </div>
    )
}

export default GroupTile;