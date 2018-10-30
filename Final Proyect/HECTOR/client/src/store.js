import { createStore } from 'redux';

let reducer = (state, action ) => {

    if (action.type === 'SET_USER_NAME') {
        console.log(action.user_name)
        return {
            ...state,
            user_name : action.user_name
        }
    }


    if (action.type === 'SET_ALBUMS') {
        console.log(action.albums)
        return {
            ...state,
            albums: action.albums
        }
    }

    if (action.type === 'SET_LIST') {
        return {
            ...state,
            list : action.list
        }
    }
    if (action.type === 'SET_ARTIST_NAME') {
        console.log(action.artist_name)
        return {
            ...state,
            artist_name : action.artist_name
        }
    }
    if(action.type ==='SET_PLAYLIST'){
        console.log(action.play_list)
        return {
            ...state,
            play_list: action.play_list
        }
    }
    return state;
}
export default createStore(reducer, {user_name:'',list:[], artist_name:'', albums:[],play_list:[]});