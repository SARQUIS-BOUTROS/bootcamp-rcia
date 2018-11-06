import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect } from 'react-redux';
import '../shared/styles/card.css'
import {onPlay, addTrack, initTrackList, sorted, setFavoriteCondition, favorites} from "../../actionsCreators";

var spotifyApi = new SpotifyWebApi();

class PlayListView extends Component {
    constructor() {
        super()
        this.state = {
        }
        document.title = "Spoty | Playlist ";
    }

    isFavorite(track) {
        let trackId = track.track.id
        let newState= '';
        console.log(track.isFavorite[0].toString())
        if (track.isFavorite[0] == false){
            spotifyApi.addToMySavedTracks([trackId])
                .then(data =>
                    console.log('Added track!')).catch (console.log('error'))
            newState = true;
        } else if (track.isFavorite[0] == true)
        {
            spotifyApi.removeFromMySavedTracks([trackId])
                .then(data =>
                    console.log('track remove from favorites')).catch (console.log('error'))
            newState = false;
        }
        this.props.setFavoriteCondition(track, newState);
        this.forceUpdate();
        spotifyApi.getMySavedTracks()
            .then(data =>
                this.props.favorites({data}))
            .catch(console.log('error'));
    }

    componentDidMount(){

        this.getPlayList(this.props.match.params.album);
        this.props.initTrackList()
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.album !== this.props.match.params.album){
            this.props.initTrackList()
            this.getPlayList(this.props.match.params.album);
        }
    }


    getPlayList(playListId){
        let list;
       list = spotifyApi.getAlbum(playListId)
            .then( data => data.tracks.items
            )
        list.then(data => this.getFavorites(data));
    }
    getFavorites(list) {
        var cont = this;
        list.forEach(function(element) {
                spotifyApi.containsMySavedTracks([element.id])
                    .then(data => cont.addTrack(element, data));
        }
        )
    }

    addTrack(element, data) {
        this.props.addTrack(element, data)

    }

    sorted() {
        this.props.sorted();
        this.forceUpdate();
    }
        render() {
        return (
            <article>
                Music Playlist
                <button onClick={()=> this.sorted()}>Sorted  duration</button>
                <section className={'cards-content'}>
                    {this.props.trackList.map( track =>
                        <div className='card' key={track.track.id}>
                            <div className='description'>
                                <div className={'track'} onClick={() => this.props.onPlay(track.track.preview_url)}>{track.track.name}</div>
                                <i className={"material-icons isFavorite "+track.isFavorite[0].toString()} onClick={()=> this.isFavorite(track)}>start</i>
                            </div>
                        </div>
                    )
                    }
                </section>
            </article>
        );
    }
}


function mapStateToProps(state) {

    return {
        onplay: state.onplay,
        trackList:state.trackList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onPlay: (track) => dispatch(onPlay(track)),
        addTrack: (track,isFavorite) => dispatch(addTrack(track,isFavorite)),
        initTrackList: () => dispatch(initTrackList()),
        sorted: () => dispatch(sorted()),
        setFavoriteCondition: (track, newState) => dispatch(setFavoriteCondition(track, newState)),
        favorites: (data) => dispatch(favorites(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayListView);
