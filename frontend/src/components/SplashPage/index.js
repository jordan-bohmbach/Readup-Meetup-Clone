import { Link } from 'react-router-dom'
import './SplashPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../store/events'
import { getGroups } from '../../store/group'
import { useEffect } from 'react'
import EventTile from '../EventTile'
import GroupTile from '../GroupTile'

const SplashPage = () => {
    const dispatch = useDispatch();
    const eventList = useSelector(state => Object.values(state.events))
    const groupList = useSelector(state => Object.values(state.groups))

    const buttonList = ['Boost your career', 'Find your zen', 'Get moving', 'Share language + culture', 'Read with friends', 'Write together', 'Hone your craft']
    const happeningList = ['Starting soon', 'Today', 'Tomorrow', 'This week', 'Online', 'In person', 'Trending near you']
    
    useEffect(()=> {
        dispatch(getEvents())
        dispatch(getGroups())
    }, [dispatch])

    return(
        <div className='splash-page'>
            <div className='top-section'>
                <div className='top-section-text'>
                    <h1>Dive in! There are so many book clubs to join on Readup</h1>
                    <h2>Join a group to meet people, make friends, find a bookclub, and explore your interests. Thousands of events are happening every day, both online and in person</h2>
                </div>
                <img src='/images/splash-img.png' alt='top section not found' className='top-section-img'></img>                
            </div>
            <div className="options-section">
                <div className='individual-option'>
                    <img src='/images/girl.jpeg' alt='girl not found'></img>
                    <Link to='/'>Make new friends</Link>
                </div>
                <div className='individual-option'>
                    <img src='/images/outdoors.jpeg' alt='outdoors not found'></img>
                    <Link to='/'>Explore the outdoors</Link>
                </div>
                <div className='individual-option'>
                    <img src='/images/online.jpeg' alt='online not found'></img>
                    <Link to='/'>Connect over tech</Link>
                </div>
            </div>

            <div className='buttons-section'>
                {buttonList.map(button => (
                    <Link className='search-button' to='/' key={button}>{button}</Link>
                ))}
            </div>

            <div className='search-section'>
                <div className='left-search'>
                    <input></input>
                    <input></input>
                    <Link to='/'></Link>
                </div>
                <div className='right-search'>
                    {happeningList.map(button=>(
                        <Link className='search-button' to='/' key={button}>{button}</Link>
                    ))}
                </div>
            </div>

            <div className='lower-options-section'>
                <div className='lower-option'>
                    <img src='/images/join-a-group.png' alt='group not found'></img>
                    <Link to='/'>Join a group</Link>
                    <p>Do what you love, meet others who love it, find your community. The rest is history!</p>
                </div>
                <div className='lower-option'>
                    <img src='/images/find-an-event.png' alt='event not found'></img>
                    <Link to='/'>Find an Event</Link>
                    <p>Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking</p>
                </div>
                <div className='lower-option'>
                    <img src='/images/start-a-group.png' alt='start not found'></img>
                    <Link to='/'>Start a group</Link>
                    <p>You don't have to be an expert to gather people together and explore shared interests</p>
                </div>
            </div>

            <div className='upcoming-events'>
                <div className='upcoming-events-header'>
                    <h1>Upcoming online Events</h1>
                    <Link to='/events'>{'Explore more events -->'}</Link>
                </div>

                <div className='event-tiles-section'>
                    {eventList.map(event => 
                        <EventTile 
                            key={event.id} 
                            event={event}
                        />
                    )}
                </div>
            </div>
            <div className='popular-groups'>
                <div className='popular-groups-header'>
                    <h1>Popular groups</h1>
                    <Link to='/groups'>{'Explore more groups -->'}</Link>
                </div>

                <div className='groups-tiles-section'>
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

export default SplashPage;