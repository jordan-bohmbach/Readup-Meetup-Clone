import { Link } from 'react-router-dom'
import './SplashPage.css'
import EventTile from '../EventTile'
import GroupTile from '../GroupTile'

const SplashPage = ({eventList, groupList}) => {

    const buttonList = ['Boost your career', 'Find your zen', 'Get moving', 'Share language + culture', 'Read with friends', 'Write together', 'Hone your craft']
    const happeningList = ['Starting soon', 'Today', 'Tomorrow', 'This week', 'Online', 'In person', 'Trending near you']

    return(
        <div className='splash-page'>
            <div className='top-section'>
                <div className='top-section-text'>
                    <h1>Dive in! There are so many book clubs to join on Readup</h1>
                    <p>Join a group to meet people, make friends, find a bookclub, and explore your interests. Thousands of events are happening every day, both online and in person</p>
                </div>
                <img src='/images/splash-img.png' alt='top section not found' className='top-section-img'></img>                
            </div>
            <div className="options-section">
                <div className='individual-option'>
                    <img src='/images/girl.jpeg' alt='girl not found'></img>
                    <Link to='/'>{'Make new friends --->'}</Link>
                </div>
                <div className='individual-option'>
                    <img src='/images/outdoors.jpeg' alt='outdoors not found'></img>
                    <Link to='/'>{'Explore the outdoors --->'}</Link>
                </div>
                <div className='individual-option'>
                    <img src='/images/online.jpeg' alt='online not found'></img>
                    <Link to='/'>{'Connect over tech --->'}</Link>
                </div>
            </div>

            <div className='buttons-section'>
                {buttonList.map(button => (
                    <Link className='search-button' to='/' key={button}>{button}</Link>
                ))}
            </div>

            <div className='search-section'>
                <div className='left-search'>
                    <h2>What do you want to do?</h2>
                        <div className='left-search-inputs'>
                            <input defaultValue={`Search for "Science Fiction"`}></input>
                            <input defaultValue={`Location`}></input>                            
                        </div>
                    <Link className='left-search-link' to='/'>
                        <span className='left-search-button'>Search</span>
                    </Link>
                </div>
                <div className='right-search'>
                    <h2>See what's happening</h2>
                        <div className='right-search-buttons'>
                            {happeningList.map(button=>(
                                <Link className='search-button' to='/' key={button}>{button}</Link>
                            ))}
                        </div>
                </div>
            </div>

            <div className='lower-options-section'>
                <h2>How Readup Works</h2>
                <p>Meet new people who share your reading interests through online and in-person events. It’s free to create an account.</p>
                <div className='picture-options'>
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
            </div>

            <div className='upcoming-events'>
                <div className='upcoming-events-header'>
                    <h1>Upcoming online Events</h1>
                    <Link to='/events' className='explore-link'>{'Explore more events'}</Link>
                </div>

                <div className='event-tiles-section'>
                    {eventList.slice(0,3).map(event => 
                        // <Link to={`/events/${event.id}`} key={event.id}>
                            <EventTile 
                                key={event.id} 
                                event={event}
                            />
                        // </Link>
                    )}
                </div>
            </div>
            <div className='popular-groups'>
                <div className='popular-groups-header'>
                    <h1>Popular groups</h1>
                    <Link to='/groups' className='explore-link'>{'Explore more groups'}</Link>
                </div>

                <div className='groups-tiles-section'>
                    {groupList.slice(0,3).map(group =>
                        <Link to={`/groups/${group.id}`} key={group.id}>
                            <GroupTile
                                key={group.id}
                                group={group}
                            />
                        </Link>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SplashPage;