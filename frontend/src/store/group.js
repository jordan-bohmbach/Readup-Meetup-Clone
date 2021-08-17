const ADD_GROUP = 'groups/ADD'
const REMOVE_GROUP = 'groups/REMOVE'
const EDIT_GROUP = 'groups/EDIT'


export default function groupsReducer(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case ADD_GROUP:
            console.log('adding an GROUP here')
            return newState
        case REMOVE_GROUP:
            console.log('removing an GROUP here')
            return newState
        case EDIT_GROUP:
            console.log('editing an GROUP here')
            return newState
        default:
            console.log('here in the default state')
            return newState
    }
}