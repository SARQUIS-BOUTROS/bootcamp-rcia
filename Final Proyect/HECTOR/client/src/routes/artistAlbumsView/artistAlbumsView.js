import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect } from 'react-redux';
import { setPlayList} from "../../actionsCreators"
import {Link} from "react-router-dom";


var spotifyApi = new SpotifyWebApi();


class ArtistAlbumsView extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    getPlayList(play_list_id){
        spotifyApi.getAlbum(play_list_id)
            .then( data =>
               this.props.setPlayList(data.tracks.items)
            )
    }
    render() {
        return (
            <article className="artist-album-view">
                Artist Album
                <section>
                    {this.props.albums.map( album =>
                        <div className='card' key={album.id}>
                            <Link  to="/artist-albums"> <img className={'img'} src={album.images[0].url} onClick={() => {this.getPlayList(album.id)}}/></Link>
                            <div className='description'>
                                <div className={'artist'}>{album.name}</div>
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
        albums: state.albums
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setPlayList: (play_list) => dispatch(setPlayList(play_list))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(ArtistAlbumsView);
