import { csrfFetch } from "./csrf"

const LOAD_GROUPS = 'groups/LOAD'
const ADD_GROUP = 'groups/ADD'
const REMOVE_GROUP = 'groups/REMOVE'
const EDIT_GROUP = 'groups/EDIT'

const loadGroups = (groups) => ({
    type: LOAD_GROUPS,
    groups
})

const update = (group) => ({
    type: EDIT_GROUP,
    group
})

const addOneGroup = group => ({
    type: ADD_GROUP,
    group
})

const remove = (groupId) => ({
    type: REMOVE_GROUP,
    groupId
})

export const getGroups = () => async (dispatch) => {
    const response = await fetch(`/api/groups`);
    const groupList = await response.json()
    dispatch(loadGroups(groupList));
}

export const createOneGroup = (payload) => async dispatch => {
    const {
        ownerId,
        type,
        image
    } = payload

    console.log('ownerId is currently, ', ownerId)
    console.log('type is currently ', type)
    console.log('image is currently ', image)

    // const data = { ownerId, type, image }
    const response = await csrfFetch(`/api/groups`, {
        method: 'POST',
        body: JSON.stringify({ ownerId, type, image })
    });

    let newGroup;
    if (response.ok) {
        newGroup = await response.json()
        console.log(newGroup)
        dispatch(addOneGroup(newGroup))
    }
    return newGroup;
}

export const updateGroup = group => async dispatch => {
    const response = await csrfFetch(`/api/groups/${group.id}`, {
        method: 'put',
        body: JSON.stringify(group)
    })

    if (response.ok) {
        const group = await response.json()
        dispatch(update(group))
        return group
    }
}

export const deleteGroup = groupId => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}`, {
        method: 'delete'
    })


    if (response.ok) {
        // const group = await response.json()
        dispatch(remove(groupId))
    }
}

export default function groupsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_GROUPS: 
            const newGroups = {}
            action.groups.forEach(group => {
                newGroups[group.id] = group;
            })
            return {
                ...state,
                ...newGroups
            }
        
        case ADD_GROUP: 
            if (!state[action.group.id]) {
                const newState = {
                    ...state,
                    [action.group.id]: action.group
                };

                return newState
            }
            return {
                ...state,
                [action.group.id]: {
                    ...state[action.group.id],
                    ...action.group,
                }
            }
        
        case REMOVE_GROUP: 
            let newState = {...state}
            delete newState[action.groupId]
            return newState
        
        case EDIT_GROUP:
            return{
                ...state,
                [action.group.id] : action.group
            }
        default:
            return state;
        
    }
}