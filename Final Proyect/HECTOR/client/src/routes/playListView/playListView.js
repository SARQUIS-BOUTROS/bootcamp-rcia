import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect } from 'react-redux';
import {onPlay, setPlayList} from "../../actionsCreators";

var spotifyApi = new SpotifyWebApi();


class PlayListView extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    addFavorites(trackId) {
        spotifyApi.addToMySavedTracks([trackId])
            .then(data =>
                console.log('Added track!')).catch (console.log('error'))
    }

    componentDidMount(){
        console.log(this.props.match.params.album)
        this.getPlayList(this.props.match.params.album)
    }

    getPlayList(play_list_id){
        spotifyApi.getAlbum(play_list_id)
            .then( data =>
                this.props.setPlayList(data.tracks.items)
            )
    }
    render() {
        return (
            <article className="">
                Music Playlist
                <section>
                    {this.props.play_list.map( track =>
                        <div className='card' key={track.id}>
                            <div className='description'>
                                <div className={'artist'} onClick={() => this.props.onPlay(track.preview_url)}>{track.name}</div>
                            </div>
                            <button onClick={()=> this.addFavorites(track.id)}>Agregar</button>
                            <button onClick={()=> this.checkInFavorites(track.id)}>Checkear</button>
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
        play_list: state.play_list,
        onplay: state.onplay
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onPlay: (track) => dispatch(onPlay(track)),
        setPlayList: (play_list) => dispatch(setPlayList(play_list))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(PlayListView);
