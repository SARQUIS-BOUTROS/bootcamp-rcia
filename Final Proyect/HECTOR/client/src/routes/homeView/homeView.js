import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { connect } from 'react-redux';
import '../shared/styles/card.css';
import { onPlay, deleteFromFavorites } from "../../actionsCreators";

const spotifyApi = new SpotifyWebApi();

class HomeView extends Component {
    constructor() {
        super();
        this.state = {
        }
        document.title = "Spoty | Favoritos ";
    }
    /*
    Remove song from fovorites.
     */
    removeTrackLIst(trackId) {
        spotifyApi.removeFromMySavedTracks([trackId]).then(data => this.props.deleteFromFavorites(trackId)).catch('error');
    }

    render() {
        return (
            <article>
                Favorite Song
                <section className={'cards-content'}>
                    {this.props.favorites.map( favorite =>
                        <div className='card' key={favorite.track.id}>
                            <img className={'img'} src={favorite.track.album.images[0].url}
                                 onClick={() => this.props.onPlay(favorite.track.preview_url)}/>
                            <div className='description'>
                                <div className={'album'}>{favorite.track.album.name}</div>
                                <div className={'track'}>{favorite.track.name}</div>
                                <i className={"material-icons isFavorite true"} onClick={()=> this.removeTrackLIst(favorite.track.id)}>start</i>
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
        favorites: state.favorites,
        onplay: state.onplay
    }
}
function mapDispatchToProps(dispatch) {

    return {
        onPlay: (track) => dispatch(onPlay(track)),
        deleteFromFavorites: (music) => dispatch(deleteFromFavorites(music))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
