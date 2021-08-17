import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/">
                    <img src='/images/nav-logo.png' alt='img not found'></img>
                </NavLink>
                <input className='search-input' defaultValue='search for keywords'></input>
                <input className='location-input' defaultValue='Chicago, IL'></input>
                <button className='search-button'>Search</button>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;