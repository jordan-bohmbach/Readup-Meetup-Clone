const LOAD_GROUPS = 'gropus/LOAD'
const ADD_GROUP = 'groups/ADD'
const REMOVE_GROUP = 'groups/REMOVE'
const EDIT_GROUP = 'groups/EDIT'

const loadGroups = (groups) => ({
    type: LOAD_GROUPS,
    groups
})

export const getGroups = () => async (dispatch) => {
    const response = await fetch(`/api/groups`);
    const groupList = await response.json()
    dispatch(loadGroups(groupList));
}

export default function groupsReducer(state = {}, action) {
    let newState = { ...state }
    switch (action.type) {
        case LOAD_GROUPS: {
            const newGroups = {}
            action.groups.forEach(group => {
                newGroups[group.id] = group;
            })
            return {
                ...state,
                ...newGroups
            }
        }
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