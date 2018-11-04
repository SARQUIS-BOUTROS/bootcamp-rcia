import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { connect } from 'react-redux';
import '../shared/styles/card.css';
import {Link} from "react-router-dom";
import { onPlay } from "../../actionsCreators";

const spotifyApi = new SpotifyWebApi();

class HomeView extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <article>
                Home View
                <section>
                    {this.props.favorites.map( favorite =>
                        <div className='card' key={favorite.track.id}>
                            <img className={'img'} src={favorite.track.album.images[0].url}
                                 onClick={() => this.props.onPlay(favorite.track.preview_url)}/>
                            <div className='description'>
                                <div>{favorite.track.album.name}</div>
                                <div className={'artist'}>{favorite.track.name}</div>
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
        onPlay: (track) => dispatch(onPlay(track))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
