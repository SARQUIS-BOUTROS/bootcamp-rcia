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

    if(action.type ==='FAVORITES'){
        return {
            ...state,
            favorites: action.favorites
        }
    }
    if(action.type ==='ONPLAY'){
        return {
            ...state,
            onplay: action.onplay
        }
    }
    if(action.type ==='ADDTRACK'){
        return {
            ...state,
            trackList: state.trackList.concat({'track': action.track, 'isFavorite':action.isFavorite})
        }
    }
    if(action.type ==='INITTRACKLIST'){
        return {
            ...state,
            trackList:action.trackList
        }
    }
    if(action.type ==='DELETEFROMFAVORITES'){
        let toDelete = action.deleteFromFavoritesId;
        let fav = state.favorites.filter( function (element){ return toDelete != element.track.id})
        return {
            ...state,
            favorites: fav
        }
    }
    if(action.type ==='SORTED'){
        let ordered = state.trackList.sort(function(a, b){return a.track.duration_ms - b.track.duration_ms })
        return {
            ...state,
            trackList: ordered
        }
    }
    if(action.type ==='SETFAVORITECONDITION'){
        let newTrack = state.trackList.map(track => {
            if(track.track.id === action.track.track.id){
                return { ...track, isFavorite: [action.newState]}
            }return track
         })
        return {
            ...state,
            trackList: newTrack
        }
    }
    return state;
}
export default createStore(reducer, {user_name:'',list:[], artist_name:'', albums:[],search:'', favorites:[], onplay:'',trackList:[]});