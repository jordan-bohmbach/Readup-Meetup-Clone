import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from "../../store/session";
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ isLoaded }) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [searchWord, setSearchWord] = useState('')
    const [searchingClickOut, setSearchingClickOut] = useState(false)
    const [filteredEvents, setFilteredEvents] = useState([])
    const eventList = useSelector(state=>Object.values(state.events))

    const handleDemoUser = () => {
        return dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div className='login-buttons'>
                <LoginFormModal />
                <NavLink to="/signup" className='signup-button'><span>Sign Up</span></NavLink>
                <button onClick={handleDemoUser} className='login-button'>Demo User</button>
            </div>
        );
    }

    const handleTypeing = (e) => {
        setSearchWord(e.target.value)
    }

    const handleBlur = () => {
        console.log('bluring here')
        setTimeout(() => setSearchingClickOut(true), 200)
    }

    const handleClick = () => {
        setSearchingClickOut(false)
    }

    useEffect(() => {
        setFilteredEvents(eventList.filter(event => event.name.toLowerCase().includes(searchWord.toLowerCase())))
        console.log('searchWord is now ', searchWord)
        console.log('eventList is now ', eventList)
        console.log('filteredEvents is now ', filteredEvents)
    }, [searchWord])

    return (
        <ul>
            <li>
                <NavLink exact to="/">
                    <img src='/images/nav-logo.png' alt='img not found'></img>
                </NavLink>
                <div className='search-container'>
                    <input
                        type='text'
                        name='search'
                        value={searchWord}
                        placeholder='Search for Events'
                        onChange={handleTypeing}
                        onBlur={handleBlur}
                        onClick={handleClick}>

                    </input>
                    <div className='outer-search-results-container'>
                        {(filteredEvents && searchWord) ? <ul className={searchingClickOut ? 'invisible-search' : 'search-results-container'}>
                            {filteredEvents?.map(event => (
                                <li key={event.id}><Link to={`/events/${event.id}`} >{event.name}</Link></li>
                            ))}
                        </ul> : ''}
                    </div>
                </div>
                <button className='navigation-search-button'>Search</button>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;