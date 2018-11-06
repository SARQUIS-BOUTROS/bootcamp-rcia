const setUserName = user_name => {
    return {
        type:'SET_USER_NAME',
        user_name: user_name
    };
};

const setList = items => {
    let list;
    const img_default = "http://buscoenarizona.com/wp-content/uploads/2013/03/musica-150x150.jpg";
    list = [];
    items.forEach(function(element) {
        let i ;
        let img;
        try {
            img = element.images[0].url}
            catch (e) {
            img = undefined
        };
        if(img === undefined) {
            img =  img_default
        }
        i = {
            name: element.name,
            url: img,
            href: element.href,
            id: element.id
        }
            list.push(i)
         }
    )
    return {
        type: 'SET_LIST',
        list: list
    };
};

const setArtistName = artist_name => {
    return {
        type:'SET_ARTIST_NAME',
        artist_name: artist_name
    };
};

const setAlbums = albums => {
    return {
        type:'SET_ALBUMS',
        albums: albums
    };
};
const setPlayList = playList => {
    return {
        type: 'SET_PLAYLIST',
        playList: playList
    };
};

const seek = artist => {
    return {
        type: 'SEEK',
        seek: artist
    };
};

const favorites = favorites => {
    return {
        type: 'FAVORITES',
        favorites: favorites.data.items
    };
};

const onPlay = onplay => {
    return {
        type: 'ONPLAY',
        onplay: onplay
    };
};

const addTrack = (track, isFavorite) => {
    return {
        type: 'ADDTRACK',
        track: track,
        isFavorite:isFavorite
    };
};
const initTrackList = () => {
    return {
        type: 'INITTRACKLIST',
        trackList:[]
    };
};
const deleteFromFavorites = deleteFromFavoritesId => {
    return {
        type: 'DELETEFROMFAVORITES',
        deleteFromFavoritesId:deleteFromFavoritesId
    };
};

const sorted=()=>{
    console.log('action')
    return {
        type:'SORTED'
    };
};

const setFavoriteCondition=(track, newState)=>{
    console.log(track, newState)
    return {
        type:'SETFAVORITECONDITION',
        track:track,
        newState:newState
    };
};

export {setUserName,
    setList,
    setArtistName,
    setAlbums,
    setPlayList,
    seek,
    favorites,
    onPlay,
    addTrack,
    initTrackList,
    deleteFromFavorites,
    sorted,
    setFavoriteCondition};