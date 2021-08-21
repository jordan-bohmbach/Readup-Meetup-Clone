import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from "../../store/session";
import './Navigation.css';

function Navigation({ isLoaded }) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);

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

    return (
        <ul>
            <li>
                <NavLink exact to="/">
                    <img src='/images/nav-logo.png' alt='img not found'></img>
                </NavLink>
                <div className='search-container'>
                    <input className='search-input' defaultValue='search for keywords'></input>
                    <input className='location-input' defaultValue='Chicago, IL'></input>
                    <button className='navigation-search-button'>Search</button>
                </div>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;