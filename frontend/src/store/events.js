const LOAD_EVENTS = 'events/LOAD'
const ADD_EVENT = 'events/ADD'
const REMOVE_EVENT = 'events/REMOVE'
const EDIT_EVENT = 'events/EDIT'

const load = (events) => ({
    type: LOAD_EVENTS,
    events
})

export const getEvents = () => async(dispatch) => {
    const response = await fetch(`/api/events`);
    const eventList = await response.json()
    console.log('in the reducer the eventList is : ', eventList)
    dispatch(load(eventList));
}

export default function eventsReducer(state={}, action){
    let newState = { ...state }
    switch (action.type){
        case LOAD_EVENTS: {
            const newEvents = {}
            action.events.forEach(event => {
                newEvents[event.id] = event;
            })
            return {
                ...state,
                ...newEvents
            }
        }
        case ADD_EVENT:
            console.log('adding an event here')
            return newState
        case REMOVE_EVENT:
            console.log('removing an event here')
            return newState
        case EDIT_EVENT:
            console.log('editing an event here')
            return newState
        default: 
            console.log('here in the default state')
            return newState
    }
}