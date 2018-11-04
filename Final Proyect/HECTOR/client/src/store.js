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
        return {
            ...state,
            albums: action.albums
        }
    }

    if (action.type === 'SET_LIST') {
        console.log(action.list)
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
        return {
            ...state,
            play_list: action.play_list
        }
    }
    if(action.type ==='SEEK'){
        console.log(action.seek)
        return {
            ...state,
            seek: action.seek
        }
    }
    if(action.type ==='FAVORITES'){
        return {
            ...state,
            favorites: action.favorites
        }
    }
    if(action.type ==='ONPLAY'){
        console.log(action.onplay)
        return {
            ...state,
            onplay: action.onplay
        }
    }
    return state;
}
export default createStore(reducer, {user_name:'',list:[], artist_name:'', albums:[],play_list:[],search:'', favorites:[], onplay:''});