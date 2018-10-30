import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { setArtistName, setAlbums } from "../../actionsCreators";
import './artistListView.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

const spotifyApi = new SpotifyWebApi();


class ArtistListView extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount () {
    }
    getAlbums(artist) {
        this.props.setArtistName(artist.name)
        spotifyApi.getArtistAlbums(artist.id).then( data =>
            this.props.setAlbums(data.items)
    )
    .catch(console.log('error'))
      //  return <Redirect to='/artist-albums'  />
    }


    render() {
        return (
            <article className="artist-list-view">
                Artist List
                <section>
                    {this.props.list.map( artist =>
                        <div className='card' key={artist.id}>
                            <Link to={'/artist-albums'}>  <img className={'img'} src={artist.url} onClick={() => this.getAlbums(artist)}/></Link>
                            <div className='description'>
                                <div className={'artist'}>{artist.name}</div>
                            </div>
                        </div>
                        )
                    }
                </section>
            </article>
        );
    }
};

function mapStateToProps(state) {
    return {list: state.list}
}

function mapDispatchToProps(dispatch) {
    return {
        setAlbums: (items) => dispatch(setAlbums(items)),
        setArtistName: (artist_name) => dispatch(setArtistName(artist_name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistListView);
