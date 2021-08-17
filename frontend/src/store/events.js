const ADD_EVENT = 'events/ADD'
const REMOVE_EVENT = 'events/REMOVE'
const EDIT_EVENT = 'events/EDIT'


export default function eventsReducer(state={}, action){
    let newState = { ...state }
    switch (action.type){
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