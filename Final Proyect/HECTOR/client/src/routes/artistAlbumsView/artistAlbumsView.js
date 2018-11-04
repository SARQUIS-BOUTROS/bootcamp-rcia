import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect } from 'react-redux';
import {setAlbums, setArtistName, setPlayList} from "../../actionsCreators"
import {Link} from "react-router-dom";


var spotifyApi = new SpotifyWebApi();


class ArtistAlbumsView extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.albums)
        this.getAlbums(this.props.match.params.albums)
    }
    getAlbums(artist) {
        spotifyApi.getArtistAlbums(artist).then( data =>
            this.props.setAlbums(data.items)
        )
            .catch(console.log('error'))
    }

    render() {
        return (
            <article className="artist-album-view">
                Artist Album
                <section>
                    {this.props.albums.map( album =>
                        <div className='card' key={album.id}>
                            <Link  to={"/album-playlist/"+ album.id}> <img className={'img'} src={album.images[0].url}/></Link>
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
        setAlbums: (items) => dispatch(setAlbums(items)),
        //setArtistName: (artist_name) => dispatch(setArtistName(artist_name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ArtistAlbumsView);
